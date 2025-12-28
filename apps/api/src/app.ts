import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import expressWinston from 'express-winston';
import routes from './routes/v1';
import { errorHandler } from './middleware/errorHandler';
import { generateImageKitAuth } from './utils/imageKit';
import logger from '@repo/config/logger';

import webhookRouter from "./routes/v1/webhooks";
const app:express.Application = express();

// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   credentials: true,
// }));
app.use(
  cors({
    origin: [
      "https://bulkemail.pranavmishra.dev",       // Main production frontend
      "https://www.bulkemail.pranavmishra.dev",    // If you have www version
      "http://localhost:3000",                    // For local development
      "http://localhost:5173",                    // Vite or other local ports if needed
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true, // Important if you send cookies or Authorization header with token
    optionsSuccessStatus: 200, // Optional: some browsers/legacy like 200 instead of 204
  })
);
app.use(helmet());
app.use(cookieParser());

app.use(
  '/api/v1/webhooks',
  express.raw({ type: 'application/json' }), // Keep body as Buffer
  webhookRouter
);  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP Request Logging (before routes)
app.use(expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  expressFormat: true,
  colorize: false,
  ignoreRoute: (req) => req.url === '/api/health',
}));

app.use('/api/v1', routes);

// Health check (won't be logged because of ignoreRoute above)
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running!', timestamp: new Date().toISOString() });
});


app.get('/api/v1/imagekit/auth', (req, res) => {
  try {
    const authParams = generateImageKitAuth(600);
    res.json(authParams);
  } catch (err) {
    logger.error('ImageKit auth failed', { error: err });
    res.status(500).json({ message: 'Failed to generate upload token' });
  }
});

// Error logging middleware (after routes
app.use(expressWinston.errorLogger({
  winstonInstance: logger,
}));


app.use(errorHandler);

export default app;