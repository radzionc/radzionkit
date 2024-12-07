export interface AuthSession {
  token: string
  expiresAt: number
  isFirst?: boolean
}
