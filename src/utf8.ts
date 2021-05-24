// import { TextDecoder, TextEncoder } from 'util';

// const decoder = new TextDecoder('utf-8');

// export function decode(bytes: Uint8Array): string {
//   return decoder.decode(bytes);
// }

// const encoder = new TextEncoder();

// export function encode(str: string): Uint8Array {
//   return encoder.encode(str);
// }


import { encodeFromUTF8 , decodeToUTF8  } from './encodeAndDecode'

export function decode(bytes: Uint8Array): string {
  return decodeToUTF8(bytes);
}

const encoder = new TextEncoder();

export function encode(str: string): Uint8Array {
  return encodeFromUTF8(str);
}