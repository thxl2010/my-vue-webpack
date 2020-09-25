/*
 * ! TODO: 监控上报bug到 http://sentry.hello.world.com/hello/hello-world-web/
 * Sentry is cross-platform application monitoring, with a focus on error reporting.
 * https://sentry.io
 * @Author: Duyb
 * @Date: 2020-02-27 15:36:50
 * @Last Modified by: Duyb
 * @Last Modified time: 2020-09-24 16:41:02
 */
// import * as Sentry from '@sentry/browser';

if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
  // Sentry.init({
  //   dsn: process.env.VUE_APP_SENTRY_DSN,
  //   environment: process.env.NODE_ENV
  // });
}
