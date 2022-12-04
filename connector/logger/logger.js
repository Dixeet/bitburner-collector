import signale from 'signale';
import figures from 'figures';
import config from '../config/config.js';

const { Signale } = signale;

function createLogger(options) {
  /**
   * @property {function}await
   * @property {function}complete
   * @property {function}error
   * @property {function}debug
   * @property {function}fatal
   * @property {function}fav
   * @property {function}info
   * @property {function}note
   * @property {function}pause
   * @property {function}pending
   * @property {function}star
   * @property {function}start
   * @property {function}success
   * @property {function}wait
   * @property {function}warn
   * @property {function}watch
   * @property {function}log
   */
  const logger = new Signale(options);
  return logger;
}

const types = {
  await: {
    label: '',
  },
  wait: {
    label: '',
  },
  debug: {
    label: 'debug\n',
  },
  pending: {
    badge: figures.circleDotted,
  },
  complete: {
    badge: figures.circleFilled,
  },
};

export const logger = createLogger({
  logLevel: config.logger.logLevel,
  types,
});
export const iLogger = createLogger({ interactive: true, types });
