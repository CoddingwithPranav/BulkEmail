import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import expressWinston from 'express-winston';
import logger from './config/logger'; // ← our new logger
import routes from './routes/v1';
import { errorHandler } from './middleware/errorHandler';

const app:express.Application = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

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

// Error logging middleware (after routes
app.use(expressWinston.errorLogger({
  winstonInstance: logger,
}));

app.use(errorHandler);

export default app;