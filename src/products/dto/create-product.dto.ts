import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class ProductType {
  @Field()
  readonly sku: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly isactive: boolean;
  @Field(() => Int)
  readonly price: number;
  @Field(() => Int)
  readonly weigth: number;
  @Field(() => Int)
  readonly status: number;
}
