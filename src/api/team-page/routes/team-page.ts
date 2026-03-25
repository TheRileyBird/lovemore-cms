export default {
  routes: [
    {
      method: 'GET',
      path: '/team-page',
      handler: 'team-page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/team-page',
      handler: 'team-page.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/team-page',
      handler: 'team-page.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
