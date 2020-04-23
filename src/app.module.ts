import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProdutcModel } from './products/product.module';
import { TestService } from './product/test/test.service';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    ProdutcModel,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27018/docker'),
  ],
  controllers: [AppController],
  providers: [AppService, TestService, ProductService],
})
export class AppModule {}
