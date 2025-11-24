import { z } from "zod";
import { createReceiverSchema, updateReceiverSchema } from "./receiver.schema";

const paramsId = z.object({
  id: z.string().uuid(),
});

export const createReceiverValidationSchema = z.object({
  body: createReceiverSchema,
});

export const updateReceiverValidationSchema = z.object({
  body: updateReceiverSchema,
  params: paramsId,
});

export const getReceiverValidationSchema = z.object({
  params: paramsId,
});

export const deleteReceiverValidationSchema = z.object({
  params: paramsId,
});
