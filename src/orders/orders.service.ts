import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entities/orders.entity';
import { CreateOrderDto, UpdateOrderDto } from './entities/orders.entities';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  // Create a new order
  async createOrder(createOrderDto: CreateOrderDto): Promise<Orders> {
    const newOrder = this.ordersRepository.create(createOrderDto);
    return await this.ordersRepository.save(newOrder);
  }

  // Get all orders
  async getAllOrders(): Promise<Orders[]> {
    return await this.ordersRepository.find();
  }

  // Get an order by ID
  async getOrderById(id: string): Promise<Orders> {
    const order = await this.ordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  // Update an order by ID
  async updateOrder(
    id: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Orders> {
    const order = await this.getOrderById(id); // Ensure order exists
    const updatedOrder = Object.assign(order, updateOrderDto);
    return await this.ordersRepository.save(updatedOrder);
  }

  // Delete an order by ID
  async deleteOrder(id: string): Promise<string> {
    const result = await this.ordersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return `Order with ID ${id} has been deleted`;
  }
}
