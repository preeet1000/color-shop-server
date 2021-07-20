import * as mongoose from 'mongoose';


export const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

export interface Employee {
    id: number;
    name: string;
    age: number;
}