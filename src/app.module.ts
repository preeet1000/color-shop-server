import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Welcome123:Welcome123@cluster0.pulsl.mongodb.net/employee?retryWrites=true&w=majority'),
  EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
