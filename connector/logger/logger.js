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
  return new Signale(options);
}

const types = {
  await: {
    badge: figures.ellipsis,
    color: 'blue',
    label: '',
    logLevel: 'warn',
  },
  complete: {
    badge: figures.circleFilled,
    color: 'cyan',
    label: 'complete',
    logLevel: 'warn',
  },
  debug: {
    badge: figures('⬤'),
    color: 'red',
    label: 'debug\n',
    logLevel: 'debug',
  },
  error: {
    badge: figures.cross,
    color: 'red',
    label: 'error',
    logLevel: 'error',
  },
  fatal: {
    badge: figures.cross,
    color: 'red',
    label: 'fatal',
    logLevel: 'error',
  },
  fav: {
    badge: figures('❤'),
    color: 'magenta',
    label: 'favorite',
    logLevel: 'warn',
  },
  info: {
    badge: figures.info,
    color: 'blue',
    label: 'info',
    logLevel: 'info',
  },
  log: {
    badge: '',
    color: '',
    label: '',
    logLevel: 'info',
  },
  note: {
    badge: figures.bullet,
    color: 'blue',
    label: 'note',
    logLevel: 'warn',
  },
  pause: {
    badge: figures.squareSmallFilled,
    color: 'yellow',
    label: 'pause',
    logLevel: 'warn',
  },
  pending: {
    badge: figures.circleDotted,
    color: 'magenta',
    label: 'pending',
    logLevel: 'warn',
  },
  star: {
    badge: figures.star,
    color: 'yellow',
    label: 'star',
    logLevel: 'warn',
  },
  start: {
    badge: figures.play,
    color: 'green',
    label: 'start',
    logLevel: 'warn',
  },
  success: {
    badge: figures.tick,
    color: 'green',
    label: 'success',
    logLevel: 'warn',
  },
  wait: {
    badge: figures.ellipsis,
    color: 'blue',
    label: '',
    logLevel: 'warn',
  },
  warn: {
    badge: figures.warning,
    color: 'yellow',
    label: 'warning',
    logLevel: 'warn',
  },
  watch: {
    badge: figures.ellipsis,
    color: 'yellow',
    label: 'watching',
    logLevel: 'warn',
  },
};

export const logger = createLogger({
  logLevel: config.logger.logLevel,
  types,
});
export const iLogger = createLogger({ interactive: true, types });
