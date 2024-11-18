import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Orders } from '../../orders/entities/orders.entity';

@Entity('guests')
export class Guests {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Orders, (order) => order.guests)
  order: Orders;
}
