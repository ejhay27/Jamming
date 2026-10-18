import { z } from 'zod';
import { VALIDATION } from '@jamming/shared';

// User validation schemas
export const registerSchema = z.object({
  displayName: z
    .string()
    .min(VALIDATION.DISPLAY_NAME_MIN_LENGTH, 'Display name must be at least 2 characters')
    .max(VALIDATION.DISPLAY_NAME_MAX_LENGTH, 'Display name must be less than 30 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(VALIDATION.EMAIL_MAX_LENGTH, 'Email must be less than 254 characters'),
  password: z
    .string()
    .min(VALIDATION.PASSWORD_MIN_LENGTH, 'Password must be at least 8 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Room validation schemas
export const createRoomSchema = z.object({
  name: z
    .string()
    .min(VALIDATION.ROOM_NAME_MIN_LENGTH, 'Room name must be at least 3 characters')
    .max(VALIDATION.ROOM_NAME_MAX_LENGTH, 'Room name must be less than 50 characters'),
  password: z
    .string()
    .length(VALIDATION.ROOM_PASSWORD_LENGTH, 'Room password must be exactly 4 digits')
    .regex(/^\d{4}$/, 'Room password must be exactly 4 digits'),
  description: z
    .string()
    .max(VALIDATION.ROOM_DESCRIPTION_MAX_LENGTH, 'Description must be less than 200 characters')
    .optional(),
  settings: z
    .object({
      maxMembers: z.number().int().positive().optional(),
      allowQueueReorder: z.boolean().optional(),
      allowQueueRemove: z.boolean().optional(),
    })
    .optional(),
});

export const joinRoomSchema = z.object({
  roomCode: z.string().min(1, 'Room code is required'),
  password: z
    .string()
    .length(VALIDATION.ROOM_PASSWORD_LENGTH, 'Room password must be exactly 4 digits')
    .regex(/^\d{4}$/, 'Room password must be exactly 4 digits'),
});

export const roomCodeSchema = z.string().min(1, 'Room code is required');

// Queue validation schemas
export const addToQueueSchema = z.object({
  track: z.object({
    id: z.string().min(1, 'Track ID is required'),
    uri: z.string().min(1, 'Track URI is required'),
    name: z.string().min(1, 'Track name is required'),
    artists: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        externalUrls: z.object({
          spotify: z.string().url(),
        }),
      })
    ),
    album: z.object({
      id: z.string(),
      name: z.string(),
      images: z.array(
        z.object({
          url: z.string().url(),
          height: z.number(),
          width: z.number(),
        })
      ),
      externalUrls: z.object({
        spotify: z.string().url(),
      }),
    }),
    durationMs: z.number().int().positive(),
    previewUrl: z.string().url().optional(),
    externalUrls: z.object({
      spotify: z.string().url(),
    }),
  }),
});

export const reorderQueueSchema = z.object({
  itemId: z.string().min(1, 'Item ID is required'),
  newPosition: z.number().int().min(0, 'Position must be non-negative'),
});

export const removeFromQueueSchema = z.object({
  itemId: z.string().min(1, 'Item ID is required'),
});

// Room settings validation
export const updateRoomSettingsSchema = z.object({
  maxMembers: z.number().int().positive().optional(),
  allowQueueReorder: z.boolean().optional(),
  allowQueueRemove: z.boolean().optional(),
});

// Type exports
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateRoomInput = z.infer<typeof createRoomSchema>;
export type JoinRoomInput = z.infer<typeof joinRoomSchema>;
export type AddToQueueInput = z.infer<typeof addToQueueSchema>;
export type ReorderQueueInput = z.infer<typeof reorderQueueSchema>;
export type RemoveFromQueueInput = z.infer<typeof removeFromQueueSchema>;
export type UpdateRoomSettingsInput = z.infer<typeof updateRoomSettingsSchema>;
