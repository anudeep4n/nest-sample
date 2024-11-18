export class CreateOrderDto {
  id: string;
  userId: string;
  guestId?: string; // Optional if an order may or may not involve a guest
  date: string;
  location: string;
  totalAmount: number;
}

export class UpdateOrderDto {
  userId?: string;
  guestId?: string;
  date?: Date;
  location?: string;
  totalAmount?: number;
}
