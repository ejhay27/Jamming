import { Router } from 'express';
import { AppError } from '../middleware/errorHandler.js';

export const authRouter = Router();

// Register endpoint (placeholder for Milestone 2)
authRouter.post('/register', async (req, res, next) => {
  try {
    // TODO: Implement user registration in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Authentication will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});

// Login endpoint (placeholder for Milestone 2)
authRouter.post('/login', async (req, res, next) => {
  try {
    // TODO: Implement user login in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Authentication will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});

// Get current user endpoint (placeholder for Milestone 2)
authRouter.get('/me', async (req, res, next) => {
  try {
    // TODO: Implement get current user in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Authentication will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});
