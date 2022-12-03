export default function (wss) {
  return {
    send(json) {
      wss.clients.forEach((game) => game.send(json));
    },
  };
}
