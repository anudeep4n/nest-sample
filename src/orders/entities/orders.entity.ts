import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Guests } from '../../users/entities/guests.entity';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  place: string; // e.g., "Restaurant", "Event Hall", etc.

  @Column()
  date: string; // Date of the booking

  @ManyToOne(() => Users, (user) => user.orders)
  user: Users;

  @OneToMany(() => Guests, (guest) => guest.order)
  guests: Guests[];
}
