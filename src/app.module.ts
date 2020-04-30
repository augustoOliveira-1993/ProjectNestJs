import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductModel } from './products/product.module';

@Module({
  imports: [
    ProductModel,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27018/docker'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
