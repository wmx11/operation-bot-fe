export const IS_DEV = process.env.NODE_ENV !== 'production';
export const DOMAIN = IS_DEV
  ? 'http://localhost:3000'
  : 'https://operation-bot.com';
