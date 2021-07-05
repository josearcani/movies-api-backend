const { config } = require('../config');

// establemos el cache con un timepo definido dependiento si estamos en producción
function cacheResponse (res, seconds) {
  if (!config.dev) {
    res.set("Cache-Control", `public, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;