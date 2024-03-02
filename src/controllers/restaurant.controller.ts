import { Service } from "typedi";
import RestaurantService from "../services/restaurant.service";
import { Request, Response } from "express";

@Service()
export default class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  // TODO: Add schema validation for every endpoint

  async getRestaurants(req: Request, res: Response) {
    const restaurants = await this.restaurantService.getRestaurants(req.query);

    return res.status(200).json(restaurants);
  }

  async createRestaurant(req: Request, res: Response) {
    const restaurant = await this.restaurantService.createRestaurant(req.body);

    return res.status(201).json(restaurant);
  }
}
