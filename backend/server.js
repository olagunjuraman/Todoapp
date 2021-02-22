const Hapi = require("@hapi/hapi");

const todoRoutes = require("./routes/todoRoutes");

const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: "localhost",
  });

  server.route({
    path: "/",
    method: "GET",
    handler(req, reply) {
      reply("Welcome to HapiJs course!!");
    },
  });

  server.route(todoRoutes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
