export default {
  routes: [
    {
      method: 'GET',
      path: '/retreats',
      handler: 'retreat.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/retreats/:id',
      handler: 'retreat.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/retreats',
      handler: 'retreat.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/retreats/:id',
      handler: 'retreat.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/retreats/:id',
      handler: 'retreat.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
