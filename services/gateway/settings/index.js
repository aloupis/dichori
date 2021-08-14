const { authenticate } = require('../auth');
const db = require('../db');
const { Sentry } = require('../sentry');

const resolvers = {
  Query: {
    settings: async () => {
      const settings = await db.select('settings', { id: 1 });
      return {
        ...settings[0],
        header_menu_config: JSON.stringify(settings[0].header_menu_config),
        footer_menu_config: JSON.stringify(settings[0].footer_menu_config),
      };
    },
  },
  Mutation: {
    update_settings: async (_, { set }, { token }) => {
      try {
        authenticate(token);

        await db.update(
          'settings',
          {
            ...set,
          },
          1
        );
        return set;
      } catch (err) {
        console.log({ err });
        Sentry.captureException(err);
        return null;
      }
    },
  },
};

module.exports = resolvers;
