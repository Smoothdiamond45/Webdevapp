const logger = {
  log: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
  info: (...args) => console.info(...args),
  warn: (...args) => console.warn(...args),
  debug: (...args) => console.debug(...args),
};
export default logger;