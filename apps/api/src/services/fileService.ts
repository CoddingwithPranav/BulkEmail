import prisma from '../config/database';
import logger from '../config/logger';
import fs from 'fs';
import csv from 'csv-parser';
import XLSX from 'xlsx';
import path from 'path';

const parseCSV = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
};

const parseXLSX = (filePath: string): any[] => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error('No sheets found in the Excel file');
  }
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error('Worksheet not found in the Excel file');
  }
  return XLSX.utils.sheet_to_json(worksheet);
};

export const parseAndSaveReceivers = async (
  filePath: string,
  fileId: number,
  type: 'CSV' | 'XLSX'
) => {
  let rows: any[] = [];

  try {
    rows = type === 'CSV' ? await parseCSV(filePath) : parseXLSX(filePath);
  } catch (err) {
    logger.error('File parsing failed during read', { filePath, err });
    throw new Error('Invalid file format');
  }

  const receivers = rows
    .map((row: any) => {
      const phone =
        row.phoneNumber ||
        row.Phone ||
        row.mobile ||
        row.Mobile ||
        row['Phone Number'] ||
        row['phone'] ||
        row['Mobile Number'];

      if (!phone) return null;

      return {
        fileId,
        phoneNumber: String(phone).trim(),
        firstName: row.firstName || row.FirstName || row.name || '',
        lastName: row.lastName || row.LastName || '',
        province: row.province || row.Province || '',
        district: row.district || row.District || '',
        municipality: row.municipality || row.Municipality || '',
      };
    })
    .filter(Boolean);

  if (receivers.length === 0) {
    throw new Error('No valid phone numbers found in file');
  }

  // Bulk insert with deduplication per file
  await prisma.receiver.createMany({
    data: receivers,
    skipDuplicates: true,
  });

  logger.info('Receivers parsed and saved', { fileId, count: receivers.length });
  return receivers.length;
};

export const deleteFileAndReceivers = async (fileId: number, filePhysicalPath?: string) => {
  await prisma.receiver.deleteMany({ where: { fileId } });
  await prisma.files.delete({ where: { id: fileId } });

  if (filePhysicalPath && fs.existsSync(filePhysicalPath)) {
    fs.unlinkSync(filePhysicalPath);
  }

  logger.info('File and receivers deleted', { fileId });
};