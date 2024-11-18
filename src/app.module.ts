import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    UsersModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'lakanavarapu.anudeep', // username
      password: '1234', // user password
      database: 'nest', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
