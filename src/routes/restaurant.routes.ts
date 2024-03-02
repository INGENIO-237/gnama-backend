import "reflect-metadata";

import { Router } from "express";
import Container from "typedi";
import RestaurantController from "../controllers/restaurant.controller";
import { parseSingleImage, upload } from "../utils/multer.utils";
import tryCatch from "../utils/trycatch";
import { checkJwt, parseJwt } from "../middlewares/auth";

const RestaurantRouter = Router();

const restaurantController = Container.get(RestaurantController);

RestaurantRouter.use(checkJwt);
RestaurantRouter.use(parseJwt);

RestaurantRouter.get(
  "",
  tryCatch(restaurantController.getRestaurants.bind(restaurantController))
);
RestaurantRouter.post(
  "",
  upload.single("image"),
  tryCatch(parseSingleImage),
  tryCatch(restaurantController.createRestaurant.bind(restaurantController))
);

export default RestaurantRouter;
