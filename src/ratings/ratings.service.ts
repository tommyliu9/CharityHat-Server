import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RatingsController, NPOratingDTO } from './ratings.controller';
import { Model } from 'mongoose';
import {InvoiceService } from '../invoice/invoice.services'
import { Ratings } from './ratings.interface';

@Injectable()
export class RatingsService {
    constructor(@InjectModel("Ratings") private ratingsModel: Model<Ratings>){}

    async postNPOrating(npo: string, body: NPOratingDTO) {
        const { username, rating, date } = body;
        console.log(username, rating, date);
        const sendRating = new Ratings(username, npo, date, rating);
        const submittedRating = new this.ratingsModel(sendRating);
        return await submittedRating.save();
    }

    async getNPOrating(npo: string){
        console.log('npo rating - service')
        return await this.ratingsModel.find({
            npo
        }).exec();
    }

} 