import { Controller } from '@nestjs/common';
import { CharitiesService } from './charities.service';
import { Post, Put, Get, Delete, Body, Param } from '@nestjs/common';

@Controller('charities')
export class CharitiesController {
    constructor(private charitiesService: CharitiesService){}

    @Get()
    async getAllCharities(): Promise<Charity[]> {
        return this.charitiesService.getAll();
    }

    @Post()
    async postCharities(@Body() body: CharityDTO): Promise<Charity> { 
        return this.charitiesService.postCharities();
    }


}