import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "config";
import path from "path";
import logger from "./modules/logger";

const app = express();

app.use(bodyParser.json());
app.use('/api/admin', require('./api/admin'));
app.use('/api/setting', require('./api/setting'));


app.use("/uploads", express.static("uploads"));
app.use("/file", express.static("file"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = config.get("port") || 4000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () =>
      logger.info(`Запуск сервера порт: ${PORT}`)
    );

    
  } catch (err) {
    console.log("Ошибка запуска сервера.", err.message);
    logger.error(`Ошибка запуска сервера. ${err.message}`);
    process.exit(1);
  }
}

start();