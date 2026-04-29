import type { Core } from '@strapi/strapi';

export default {
  unpublishPastEvents: {
    task: async ({ strapi }: { strapi: Core.Strapi }) => {
      const today = new Date().toISOString().split('T')[0];

      const [retreats, trainings] = await Promise.all([
        strapi.db.query('api::retreat.retreat').updateMany({
          where: { endDate: { $lt: today }, publishedAt: { $notNull: true } },
          data: { publishedAt: null },
        }),
        strapi.db.query('api::training.training').updateMany({
          where: { endDate: { $lt: today }, publishedAt: { $notNull: true } },
          data: { publishedAt: null },
        }),
      ]);

      strapi.log.info(
        `[cron] Unpublished ${retreats.count} past retreat(s) and ${trainings.count} past training(s).`
      );
    },
    options: {
      rule: '0 2 * * *',
    },
  },
};
