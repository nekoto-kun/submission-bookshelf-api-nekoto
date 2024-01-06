import Hapi from '@hapi/hapi';
import routes from './routes.js';

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
});

(async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.info(`Server running on ${server.info.uri}`)
})();
