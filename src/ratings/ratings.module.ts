import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';
import { RatingsSchema } from './ratings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ratings', schema: RatingsSchema}]),
  ],
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class RatingsModule {}

