import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://4cbf5aeda5174182b768d1246ab6c3c3@sentry.io/1511643"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
