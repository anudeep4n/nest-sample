import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orders } from '../../orders/entities/orders.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Orders, (order) => order.user)
  orders: Orders[];
}
