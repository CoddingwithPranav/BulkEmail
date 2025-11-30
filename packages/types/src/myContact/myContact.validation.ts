// packages/types/myContact/myContact.validation.ts
import { z } from "zod";
import {
  createMyContactSchema,
  updateMyContactSchema,
  getMyContactsQuerySchema,
} from "./myContact.schema";

const paramsId = z.object({ id: z.string().uuid() });

export const createMyContactValidation = z.object({
  body: createMyContactSchema,
});

export const updateMyContactValidation = z.object({
  body: updateMyContactSchema,
  params: paramsId,
});

export const deleteMyContactValidation = z.object({
  params: paramsId,
});

export const getMyContactValidation = z.object({
  params: paramsId,
});

export const getMyContactsValidation = z.object({
  query: getMyContactsQuerySchema,
});