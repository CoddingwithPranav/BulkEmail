import { ZodError, ZodType } from "@repo/types";
import { NextFunction, Request, Response } from "express";

export const validate =
  (schema: ZodType<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        file: req.file,
        files: req.files,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          errors: error.flatten(),
        });
      }
      next(error);
    }
  };
