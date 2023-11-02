const jsonserver=require("json-server");
const server=jsonserver.create();
const router=jsonserver.router("db.json");
const middeleware=jsonserver.defaults();
const port=process.env.PORT ||3000;


server.use(middeleware);
server.use(router);
server.listen(port)