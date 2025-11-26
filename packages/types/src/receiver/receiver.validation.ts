import { z } from "zod";
import { createReceiverSchema, receiverBase } from "./receiver.schema";

const paramsId = z.object({
  id: z.string().uuid(),
});

export const createReceiverValidationSchema = z.object({
  body: createReceiverSchema,
});


export const updateReceiverValidationSchema = z.object({
  body: receiverBase.partial(),
  params: paramsId,
});

export const deleteReceiverValidationSchema = z.object({
  params: paramsId,
});

