import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './entities/orders.entities';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Create a new order
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.createOrder(createOrderDto);
  }

  // Get all orders
  @Get()
  async getAllOrders() {
    return await this.ordersService.getAllOrders();
  }

  // Get an order by ID
  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return await this.ordersService.getOrderById(id);
  }

  // Update an order by ID
  @Patch(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.updateOrder(id, updateOrderDto);
  }

  // Delete an order by ID
  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return await this.ordersService.deleteOrder(id);
  }
}
