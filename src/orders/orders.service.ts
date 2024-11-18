import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/orders/entities/orders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}
  async getOrdersService(id: string) {
    return await this.ordersRepository.find({ where: { id } });
  }
}
