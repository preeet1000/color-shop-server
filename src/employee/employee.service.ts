import { Employee } from './employee.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) { }

    async insertEmployee(name: string, age: number) {
        const newEmployee = new this.employeeModel({ name: name, age: age });
        const result = await newEmployee.save();
        console.log(result);
        return result.id as string;
    }

    async getAllEmployees() {
        const employees = await this.employeeModel.find().exec();
        return employees.map((emp:any)=> ({id:emp._id,name:emp.name,age:emp.age}))
    }
}
