import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantProfileServiceBase } from "./base/restaurantProfile.service.base";

@Injectable()
export class RestaurantProfileService extends RestaurantProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
