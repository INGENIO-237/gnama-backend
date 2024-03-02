import { Service } from "typedi";
import RestaurantRepository from "../repositories/restaurant.repository";

@Service()
export default class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async getRestaurants(filter: any){
    return await this.restaurantRepository.getRestaurants(filter);
  }

  async createRestaurant(payload: any) {
    const { user } = payload;
    const restaurant = await this.getRestaurant({ user });

    // TODO: Implement error handling -> If existing restaurant, raise an error that user can't have 1+ restaurant
    
    return await this.restaurantRepository.createRestaurant(payload);
  }

  async getRestaurant(filter: any) {
    return await this.restaurantRepository.getRestaurant(filter);
  }
}
