// Filter out noisy Vite HMR logs in development
if (import.meta.env.DEV) {
  const originalDebug = console.debug;
  const originalLog = console.log;

  console.debug = (...args: any[]) => {
    // Filter out Vite HMR messages
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('[vite]') || message.includes('hot updated'))
    ) {
      return;
    }
    originalDebug.apply(console, args);
  };

  console.log = (...args: any[]) => {
    // Filter out Vite HMR messages
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('[vite]') || message.includes('hot updated'))
    ) {
      return;
    }
    originalLog.apply(console, args);
  };
}

