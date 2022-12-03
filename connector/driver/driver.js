import wss from './wss.js';
import jsonrpc from './jsonrpc.js';
import sender from './sender.js';

const DEFAULT_SERVER = 'home';
const { send } = sender(wss);

export default {
  wss,
  getFileNames(server = DEFAULT_SERVER) {
    return send(jsonrpc('getFileNames', { server }));
  },
  pushFile(filename, content, server = DEFAULT_SERVER) {
    return jsonrpc('pushfile', {
      filename,
      content,
      server,
    });
  },
};
