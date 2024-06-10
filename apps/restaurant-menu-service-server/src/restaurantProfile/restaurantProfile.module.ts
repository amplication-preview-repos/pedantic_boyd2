import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantProfileModuleBase } from "./base/restaurantProfile.module.base";
import { RestaurantProfileService } from "./restaurantProfile.service";
import { RestaurantProfileController } from "./restaurantProfile.controller";
import { RestaurantProfileResolver } from "./restaurantProfile.resolver";

@Module({
  imports: [RestaurantProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantProfileController],
  providers: [RestaurantProfileService, RestaurantProfileResolver],
  exports: [RestaurantProfileService],
})
export class RestaurantProfileModule {}
