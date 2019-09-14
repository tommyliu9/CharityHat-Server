import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { CharitiesController } from './charities.controller';
import { CharitiesServices } from './charities.services';
import { CharitiesSchema } from './charities.schema';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Charities', schema: CharitiesSchema}])],
  controllers: [CharitiesController],
  providers: [CharitiesServices],
})
export class CharitiesModule {}

