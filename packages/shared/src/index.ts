// User types
export interface User {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  spotifyConnected: boolean;
}

export interface UserSession {
  userId: string;
  token: string;
  expiresAt: Date;
}

// Spotify types
export interface SpotifyConnection {
  userId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
  scopes: string[];
  connected: boolean;
}

export interface SpotifyTrack {
  id: string;
  uri: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  durationMs: number;
  previewUrl?: string;
  externalUrls: {
    spotify: string;
  };
}

export interface SpotifyArtist {
  id: string;
  name: string;
  externalUrls: {
    spotify: string;
  };
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
  externalUrls: {
    spotify: string;
  };
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

// Room types
export interface Room {
  id: string;
  roomCode: string;
  name: string;
  description?: string;
  hostUserId: string;
  status: RoomStatus;
  settings: RoomSettings;
  createdAt: Date;
  expiresAt?: Date;
}

export enum RoomStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  CLOSED = 'closed',
}

export interface RoomSettings {
  maxMembers?: number;
  allowQueueReorder?: boolean;
  allowQueueRemove?: boolean;
}

export interface RoomMember {
  userId: string;
  roomId: string;
  displayName: string;
  role: MemberRole;
  joinedAt: Date;
  lastSeenAt: Date;
  online: boolean;
  spotifyConnected: boolean;
}

export enum MemberRole {
  HOST = 'host',
  MEMBER = 'member',
}

// Queue types
export interface QueueItem {
  id: string;
  roomId: string;
  track: SpotifyTrack;
  addedByUserId: string;
  addedByDisplayName: string;
  position: number;
  createdAt: Date;
}

// API types
export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface CreateRoomRequest {
  name: string;
  password: string;
  description?: string;
  settings?: RoomSettings;
}

export interface CreateRoomResponse {
  room: Room;
  roomCode: string;
}

export interface JoinRoomRequest {
  roomCode: string;
  password: string;
}

export interface JoinRoomResponse {
  room: Room;
  members: RoomMember[];
  queue: QueueItem[];
}

export interface AddToQueueRequest {
  track: SpotifyTrack;
}

export interface ReorderQueueRequest {
  itemId: string;
  newPosition: number;
}

// Socket events
export enum SocketEvents {
  // Client -> Server
  JOIN_ROOM = 'room:join',
  LEAVE_ROOM = 'room:leave',
  CLOSE_ROOM = 'room:close',
  ADD_TO_QUEUE = 'queue:add',
  REMOVE_FROM_QUEUE = 'queue:remove',
  REORDER_QUEUE = 'queue:reorder',
  UPDATE_ROOM_SETTINGS = 'room:settings:update',

  // Server -> Client
  ROOM_JOINED = 'room:joined',
  ROOM_LEFT = 'room:left',
  ROOM_CLOSED = 'room:closed',
  MEMBER_JOINED = 'member:joined',
  MEMBER_LEFT = 'member:left',
  MEMBER_UPDATED = 'member:updated',
  QUEUE_UPDATED = 'queue:updated',
  QUEUE_ITEM_ADDED = 'queue:item:added',
  QUEUE_ITEM_REMOVED = 'queue:item:removed',
  QUEUE_REORDERED = 'queue:reordered',
  ROOM_SETTINGS_UPDATED = 'room:settings:updated',
  ERROR = 'error',
}

// Validation constants
export const VALIDATION = {
  ROOM_NAME_MIN_LENGTH: 3,
  ROOM_NAME_MAX_LENGTH: 50,
  ROOM_PASSWORD_LENGTH: 4,
  ROOM_DESCRIPTION_MAX_LENGTH: 200,
  DISPLAY_NAME_MIN_LENGTH: 2,
  DISPLAY_NAME_MAX_LENGTH: 30,
  EMAIL_MAX_LENGTH: 254,
  PASSWORD_MIN_LENGTH: 8,
} as const;
