import { randomInt } from 'node:crypto';

export default function (method, params) {
  const json = JSON.stringify({
    jsonrpc: '2.0',
    id: `${method}-${randomInt(10000, 99999)}`,
    method,
    params,
  });
  // eslint-disable-next-line no-console -- Explicit log
  console.log('Sending to Bitburner...');
  // eslint-disable-next-line no-console -- Explicit log
  console.log(json);
  return json;
}
