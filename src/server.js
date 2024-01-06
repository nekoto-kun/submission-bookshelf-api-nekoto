import Hapi from '@hapi/hapi';

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
});

(async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  })

  await server.start()
  console.info(`Server running on ${server.info.uri}`)
})();
