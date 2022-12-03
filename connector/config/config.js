import * as dotenv from 'dotenv';
dotenv.config();

export default {
  wss: {
    port: process.env.WSS_PORT ?? 8080,
  },
};
