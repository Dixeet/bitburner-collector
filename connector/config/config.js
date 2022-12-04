import * as dotenv from 'dotenv';
dotenv.config();

export default {
  wss: {
    port: process.env.WSS_PORT ?? 8080,
  },
  logger: {
    logLevel: process.env.LOGGER_LOGLEVEL ?? 'info',
  },
};
