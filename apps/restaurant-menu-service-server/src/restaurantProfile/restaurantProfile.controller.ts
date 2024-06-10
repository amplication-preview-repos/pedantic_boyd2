import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantProfileService } from "./restaurantProfile.service";
import { RestaurantProfileControllerBase } from "./base/restaurantProfile.controller.base";

@swagger.ApiTags("restaurantProfiles")
@common.Controller("restaurantProfiles")
export class RestaurantProfileController extends RestaurantProfileControllerBase {
  constructor(
    protected readonly service: RestaurantProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
