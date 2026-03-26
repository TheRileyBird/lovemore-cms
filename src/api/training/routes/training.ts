export default {
  routes: [
    {
      method: 'GET',
      path: '/trainings',
      handler: 'training.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/trainings/:id',
      handler: 'training.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/trainings',
      handler: 'training.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/trainings/:id',
      handler: 'training.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/trainings/:id',
      handler: 'training.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
