import { Router } from 'express';
import { AppError } from '../middleware/errorHandler.js';

export const roomsRouter = Router();

// Create room endpoint (placeholder for Milestone 2)
roomsRouter.post('/', async (req, res, next) => {
  try {
    // TODO: Implement room creation in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Room creation will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});

// Join room endpoint (placeholder for Milestone 2)
roomsRouter.post('/join', async (req, res, next) => {
  try {
    // TODO: Implement room joining in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Room joining will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});

// Get room details endpoint (placeholder for Milestone 2)
roomsRouter.get('/:roomCode', async (req, res, next) => {
  try {
    // TODO: Implement get room details in Milestone 2
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Room details will be implemented in Milestone 2'
    );
  } catch (error) {
    next(error);
  }
});
