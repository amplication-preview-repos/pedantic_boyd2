import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantProfileResolverBase } from "./base/restaurantProfile.resolver.base";
import { RestaurantProfile } from "./base/RestaurantProfile";
import { RestaurantProfileService } from "./restaurantProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantProfile)
export class RestaurantProfileResolver extends RestaurantProfileResolverBase {
  constructor(
    protected readonly service: RestaurantProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
