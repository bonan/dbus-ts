
export interface Message {
  type?: number
  serial?: number
  replySerial?: number
  member?: string
  path?: string
  destination?: string
  sender?: string
  interface?: string
  flags?: number
  errorName?: string
  signature?: string
  body?: any

}
