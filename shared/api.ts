/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface ExchangeRequestPayload {
  city: string;
  direction: string;
  amount: string;
  telegram: string;
  note: string;
  lang: "EN" | "RU";
}

export interface ExchangeRequestResponse {
  ok: boolean;
}
