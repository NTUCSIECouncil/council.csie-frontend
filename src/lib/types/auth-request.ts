export interface AuthRequestInit extends RequestInit {
  auth?: boolean;
}

export type AuthRequest = (url: string, request?: AuthRequestInit) => Promise<Response | null>;
