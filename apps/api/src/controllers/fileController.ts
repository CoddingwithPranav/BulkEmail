import { Response } from 'express';
import prisma from '../config/database';
import logger from '../config/logger';
import { AuthRequest } from '../middleware/auth';
import { parseAndSaveReceivers } from '../services/fileService';
import fs from 'fs';
import path from 'path';

export const uploadFile = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const { originalname, size, mimetype, path: filePath } = req.file;

  try {
    const file = await prisma.files.create({
      data: {
        userId: req.user.id,
        name: originalname,
        sizeInBytes: BigInt(size),
        type: mimetype.includes('csv') ? 'CSV' : 'XLSX',
        uploadStatus: 'PENDING',
      },
    });

    const count = await parseAndSaveReceivers(
      filePath,
      file.id,
      mimetype.includes('csv') ? 'CSV' : 'XLSX'
    );

    await prisma.files.update({
      where: { id: file.id },
      data: { numberOfReceivers: count, uploadStatus: 'UPLOADED' },
    });

    logger.info('File uploaded and parsed', { fileId: file.id, receivers: count, userId: req.user.id });
    res.json({ message: 'File processed successfully', fileId: file.id, numberOfReceivers: count });
  } catch (err: any) {
    await prisma.files.update({ where: { id: (await prisma.files.findFirst({ where: { name: originalname, userId: req.user.id } }))?.id }, data: { uploadStatus: 'FAILED' } });
    logger.error('File parsing failed', { fileName: originalname, userId: req.user.id, error: err.message });
    res.status(500).json({ message: 'Failed to process file' });
  }
};

export const getMyFiles = async (req: AuthRequest, res: Response) => {
  const files = await prisma.files.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: 'desc' },
  });
  res.json({ files });
};

export const getFileById = async (req: AuthRequest, res: Response) => {
  const file = await prisma.files.findFirst({
    where: { id: Number(req.params.id), userId: req.user.id },
    include: { receivers: { select: { phoneNumber: true, firstName: true, lastName: true } } },
  });
  if (!file) return res.status(404).json({ message: 'File not found' });
  res.json({ file });
};

export const deleteFile = async (req: AuthRequest, res: Response) => {
  const file = await prisma.files.findFirst({
    where: { id: Number(req.params.id), userId: req.user.id },
  });
  if (!file) return res.status(404).json({ message: 'File not found' });

  await prisma.files.delete({ where: { id: file.id } });
  fs.unlinkSync(path.join('uploads', file.name));
  logger.info('File deleted', { fileId: file.id, userId: req.user.id });
  res.json({ message: 'File deleted' });
};

export const downloadFile = async (req: AuthRequest, res: Response) => {
  const file = await prisma.files.findFirst({ where: { id: Number(req.params.id), userId: req.user.id } });
  if (!file) return res.status(404).json({ message: 'File not found' });
  res.download(path.join('uploads', file.name), file.name);
};