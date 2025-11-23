import ImageKit from 'imagekit';
import crypto from 'crypto';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export const generateImageKitAuth = (customExpirySeconds = 600) => {
  const expire = Math.floor(Date.now() / 1000) + customExpirySeconds;
  const token = crypto.randomBytes(32).toString('hex');

  const signature = crypto
    .createHmac('sha1', process.env.IMAGEKIT_PRIVATE_KEY!)
    .update(token + expire)
    .digest('hex');

  return {
    token,
    expire,
    signature,
  };
};

export default imagekit;