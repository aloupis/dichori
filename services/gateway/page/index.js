const { authenticate } = require('../auth');
const db = require('../db');
const { pageColumns, pageRelations, pageJoins } = require('./model');
const { transformEntity } = require('../utils');
const { Sentry } = require('../sentry');

const resolvers = {
  Query: {
    pages: async (_, { offset, limit, orderBy }) => {
      console.log('inpages');
      try {
        const pages = await db.selectWithJoin(
          'page',
          pageColumns,
          pageJoins,
          null,
          offset,
          limit,
          orderBy && orderBy.field ? orderBy.field : 'page.id',
          orderBy && orderBy.direction ? orderBy.direction : 'desc'
        );
        return pages.map((page) =>
          transformEntity(page, 'page', pageRelations)
        );
      } catch (err) {
        Sentry.captureException(err);
        return err;
      }
    },
    pages_count: async (_, args) => {
      try {
        const total = await db.count('page', 'id');
        return total ? total.count : 0;
      } catch (err) {
        Sentry.captureException(err);
        return err;
      }
    },
    page_by_pk: async (_, { id }) => {
      try {
        const [page] = await db.selectWithJoin('page', pageColumns, pageJoins, {
          'page.id': id,
        });

        return transformEntity(page, 'page', pageRelations);
      } catch (err) {
        Sentry.captureException(err);
        return err;
      }
    },
  },
  Mutation: {
    insert_page: async (_, { input }, { token }) => {
      try {
        // eslint-disable-next-line camelcase
        const { title_gr, title_en, content_gr, content_en, url } = input;
        const userId = authenticate(token);
        const [user] = await db.select('usr', { id: +userId });

        const [insertedPage] = await db.insert('page', {
          title_gr,
          title_en,
          content_gr,
          content_en,
          url,
          author_id: user.id,
          created_at: new Date(),
        });

        const [page] = await db.selectWithJoin('page', pageColumns, pageJoins, {
          'page.id': insertedPage.id,
        });

        return transformEntity(page, 'page', pageRelations);
      } catch (err) {
        console.log({ err });
        Sentry.captureException(err);
        return err;
      }
    },
    update_page: async (_, { set, id }, { token }) => {
      try {
        const userId = authenticate(token);
        const [user] = await db.select('usr', { id: +userId });

        await db.update(
          'page',
          {
            ...set,
            editor_id: user.id,
            updated_at: new Date(),
          },
          id
        );

        const [page] = await db.selectWithJoin('page', pageColumns, pageJoins, {
          'page.id': id,
        });
        return transformEntity(page, 'page', pageRelations);
      } catch (err) {
        Sentry.captureException(err);
        return err;
      }
    },
    delete_page: async (_, { id }, { token }) => {
      try {
        authenticate(token);
        await db.deleteRecords('page', { id });
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
