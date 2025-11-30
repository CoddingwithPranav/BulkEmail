import { z } from "zod";
import {
  createReceiverSchema,
  updateReceiverSchema,
  getMyReceiversQuerySchema,
} from "./receiver.schema";

const paramsId = z.object({
  id: z.string().uuid(),
});

export const createReceiverValidation = z.object({
  body: createReceiverSchema,
});

export const updateReceiverValidation = z.object({
  body: updateReceiverSchema,
  params: paramsId,
});

export const deleteReceiverValidation = z.object({
  params: paramsId,
});

export const getReceiversValidation = z.object({
  query: getMyReceiversQuerySchema,
});
