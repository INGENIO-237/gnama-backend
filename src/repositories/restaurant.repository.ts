import { Service } from "typedi";
import Restaurant from "../models/restaurant.model";

@Service()
export default class RestaurantRepository {
  async getRestaurants(filter: any) {
    return await Restaurant.find(filter);
  }

  async createRestaurant(payload: any) {
    return await Restaurant.create(payload);
  }

  async getRestaurant(filter: any) {
    return await Restaurant.findOne(filter);
  }
}
