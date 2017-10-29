// This config is used in both the
// frontend as well as the web server.

// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html

const CONFIG = {
  headless: false,
  api: {
    host: '127.0.0.1',
    port: 3001,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: 'localhost',
    port: 3000,
    path: '/'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
