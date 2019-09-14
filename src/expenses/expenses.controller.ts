import { Controller } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './transactions.dto';
import { Post, Put, Get, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Controller('expenses')