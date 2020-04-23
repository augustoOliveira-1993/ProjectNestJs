import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field()
  sku: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  isactive: boolean;
  @Field(() => Int)
  price: number;
  @Field(() => Int)
  weigth: number;
  @Field(() => Int)
  status: number;
}
