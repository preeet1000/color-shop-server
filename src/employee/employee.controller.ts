import { Employee } from './employee.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private _employeeService:EmployeeService){}

    @Post()
    async addEmployee(@Body('name') name: string, @Body('age') age: number) {

        //let generatedObject={};
        const generatedObject = await this._employeeService.insertEmployee(name,age)
        //  .then((res:any)=>{
        //     console.log(res);
        //     generatedObject = res;
        // });
        console.log('result post :  '+ generatedObject);
        return { object: generatedObject };
    }

    @Get()
    async getAllProducts() {
        return await this._employeeService.getAllEmployees();
    }
}
