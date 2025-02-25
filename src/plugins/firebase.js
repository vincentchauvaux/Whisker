import { app, analytics, db, auth, storage } from "../firebase/config";

export default {
  install: (app, options) => {
    // Make Firebase services available on the Vue app instance
    app.config.globalProperties.$firebase = {
      app,
      analytics,
      db,
      auth,
      storage,
    };
  },
};
