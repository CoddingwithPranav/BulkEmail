"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
// Ensure logs directory exists
const logsDir = path_1.default.join(process.cwd(), "logs");
if (!fs_1.default.existsSync(logsDir)) {
    fs_1.default.mkdirSync(logsDir, { recursive: true });
}
const logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.json()),
    defaultMeta: { service: "bulk-email" },
    transports: [
        new winston_daily_rotate_file_1.default({
            filename: path_1.default.join(logsDir, "error-%DATE%.log"),
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "30d",
            level: "error",
        }),
        new winston_daily_rotate_file_1.default({
            filename: path_1.default.join(logsDir, "combined-%DATE%.log"),
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "50m",
            maxFiles: "30d",
        }),
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
        }),
    ],
    exceptionHandlers: [
        new winston_daily_rotate_file_1.default({
            filename: path_1.default.join(logsDir, "exceptions-%DATE%.log"),
            datePattern: "YYYY-MM-DD",
        }),
    ],
    rejectionHandlers: [
        new winston_daily_rotate_file_1.default({
            filename: path_1.default.join(logsDir, "rejections-%DATE%.log"),
            datePattern: "YYYY-MM-DD",
        }),
    ],
});
exports.default = logger;
