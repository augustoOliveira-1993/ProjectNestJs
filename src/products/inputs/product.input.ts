import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field({ nullable: true })
  readonly sku: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly description?: string;
  @Field({ nullable: true })
  readonly isactive?: boolean;
  @Field(() => Int, { nullable: true })
  readonly price?: number;
  @Field(() => Int, { nullable: true })
  readonly weigth?: number;
  @Field(() => Int, { nullable: true })
  readonly status?: number;
}
