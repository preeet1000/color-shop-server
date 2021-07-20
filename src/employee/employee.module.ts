import { EmployeeSchema } from './employee.model';
import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { EmployeeService } from './employee.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
