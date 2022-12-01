import { WebSocketServer } from 'ws';
import config from '../config/index.js';

const wss = new WebSocketServer({
  port: config.wss.port,
  skipUTF8Validation: true,
});

wss.on('listening', () => {
  // eslint-disable-next-line no-console -- Explicit log
  console.log(`Listening on port ${wss.options.port}`);
});

wss.on('connection', function connection(ws) {
  // eslint-disable-next-line no-console -- Explicit log
  console.log('Bitburner client connected');
});

export default wss;
