/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RestaurantProfileWhereInput } from "./RestaurantProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantProfileOrderByInput } from "./RestaurantProfileOrderByInput";

@ArgsType()
class RestaurantProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestaurantProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestaurantProfileWhereInput, { nullable: true })
  @Type(() => RestaurantProfileWhereInput)
  where?: RestaurantProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [RestaurantProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestaurantProfileOrderByInput], { nullable: true })
  @Type(() => RestaurantProfileOrderByInput)
  orderBy?: Array<RestaurantProfileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RestaurantProfileFindManyArgs as RestaurantProfileFindManyArgs };
