import * as express from "express";
import routes from "./port/primary/router";
import { dataSource } from "./port/secondary/database";
import { PORT } from "./ultility/constants";
import {Express} from "express";

//init database connection with sqlite
dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    //create a new express server instance
    const app: Express = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", routes);

    //init express server with port
    const port = process.env.PORT || PORT;
    app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });
  })
  .catch((err) => {
    console.error("Error during initialization:", err);
  });
