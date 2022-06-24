// Optional parameters
(() => {
  function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
  }

  log('Page loaded') // Logs "12:38:31 PM Page loaded Not signed in"
  log('User signed in', 'da763be') // Logs "12:38:31 PM User signed in da763be"
})();

// Default parameters
(() => {
  function log(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
  }
  log('User clicked on a button', 'da763be')
  log('User signed out')
})();

// You can still use explicit annotations for default parameters
(() => {
  type Context = {
    appId?: string
    userId?: string
  }

  function log(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
  }
})();
