
import server from "$server/instance";
import Logger from '$pkg/logger';

const startRestApp =  () => {
  Logger.info("Starting Al-Quran Indonesia API")
  const app = server.restServer();
  const PORT: number = Number(process.env.NODE_LOCAL_PORT) || 3010;
  return app.listen(PORT, () => {
    Logger.info(`Running at Port ${PORT}`)
  });
};


export default startRestApp;

