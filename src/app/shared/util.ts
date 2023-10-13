import * as CryptoJS from 'crypto-js';


const secretKey = '12345'; // Reemplaza con tu clave secreta

export function cifrar(_token: string) {
  const encryptedData = CryptoJS.AES.encrypt(
    _token,
    secretKey
  ).toString();
  return encryptedData;
  
}

export function descifrar(_token: string) {
  const bytes = CryptoJS.AES.decrypt(_token, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
