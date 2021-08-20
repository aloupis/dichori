const { authenticate } = require('../auth');
const db = require('../db');
const { eventColumns, eventRelations, eventJoins } = require('./model');
const { transformEntity } = require('../utils');
const { Sentry } = require('../sentry');

const resolvers = {
  Query: {
    events: async () => {
      try {
        const events = await db.selectWithJoin(
          'event',
          eventColumns,
          eventJoins,
          null,
          null,
          null,
          'event.id',
          'desc'
        );

        return events.map((event) =>
          transformEntity(event, 'event', eventRelations)
        );
      } catch (err) {
        Sentry.captureException(err);
        return null;
      }
    },
  },
  Mutation: {
    insert_event: async (_, { input }, { token }) => {
      try {
        // eslint-disable-next-line camelcase
        const {
          title_gr,
          title_en,
          content_gr,
          content_en,
          event_start,
          event_end,
        } = input;
        const userId = authenticate(token);
        const [user] = await db.select('usr', { id: +userId });

        const [insertedEvent] = await db.insert('event', {
          title_gr,
          title_en,
          content_gr,
          content_en,
          event_start,
          event_end,
          author_id: user.id,
          created_at: new Date(),
        });

        const [event] = await db.selectWithJoin(
          'event',
          eventColumns,
          eventJoins,
          {
            'event.id': insertedEvent.id,
          }
        );

        return transformEntity(event, 'event', eventRelations);
      } catch (err) {
        console.log({ err });
        Sentry.captureException(err);
        return null;
      }
    },
    update_event: async (_, { set, id }, { token }) => {
      try {
        const userId = authenticate(token);
        const [user] = await db.select('usr', { id: +userId });

        await db.update(
          'event',
          {
            ...set,
            editor_id: user.id,
            updated_at: new Date(),
          },
          id
        );

        const [event] = await db.selectWithJoin(
          'event',
          eventColumns,
          eventJoins,
          {
            'event.id': id,
          }
        );
        return transformEntity(event, 'event', eventRelations);
      } catch (err) {
        Sentry.captureException(err);
        return null;
      }
    },
    delete_event: async (_, { id }, { token }) => {
      try {
        authenticate(token);
        await db.deleteRecords('event', { id });
        return {
          success: true,
        };
      } catch (err) {
        Sentry.captureException(err);
        return {
          success: false,
          message: err,
        };
      }
    },
  },
};

module.exports = resolvers;
