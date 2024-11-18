import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}
  @Get(':id')
  getOrders(@Param('id') id: string) {
    return this.orderService.getOrdersService(id);
  }
}
