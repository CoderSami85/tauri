export default {
  build: {
    distDir: '../dist',
    devPath: 'http://localhost:4000'
  },
  ctx: {},
  tauri: {
    embeddedServer: {
      active: true
    },
    bundle: {
      active: true
    },
    whitelist: {
      all: true
    },
    window: {
      title: 'Tauri App'
    },
    security: {
      csp: "default-src blob: data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'"
    },
    edge: {
      active: true
    },
    automaticStart: {
      active: true
    }
  }
}
