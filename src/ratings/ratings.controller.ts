import { Controller } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { Post, Put, Get, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

export class NPOratingDTO { 
    username: string;
    rating: number;
    date: Date;
}

@Controller('ratings')
export class RatingsController {
    constructor(private readonly ratingsService: RatingsService){}

    @Post(':npo')
    async postNPOrating(@Param('npo') npo, @Body() body: NPOratingDTO) { 
        return this.ratingsService.postNPOrating(npo, body)
    }

    @Get(':npo')
    async getNPOrating(@Param('npo') npo){
        return this.getNPOrating(npo);
    }
}