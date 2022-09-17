import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './entities/employee.entity';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Request } from 'express';
import { Address } from './entities/address.entity';
@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: SoftDeleteModel<EmployeeDocument>,
    @InjectModel(Address.name) private addressModel: Model<Address>,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  async findAll(request: Request) {
    const limit = Number(request.query?.limit) || 10;
    const page = Number(request.query?.page) || 1;
    const show_delete = (request.query.show_delete && request.query.show_delete === 'true') ? true : false;
    let conditions = { isDeleted: show_delete }

    const data = await this.employeeModel
      .find(conditions)
      .limit(limit)
      .skip(limit * (page - 1));

    return {
      data: data,
      page: page,
      totalRecords: await this.employeeModel.find(conditions).count(),
    };
  }

  async findOne(id: Types.ObjectId) {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, {
      new: true,
    });
  }

  async remove(id: Types.ObjectId) {
    const filter = { _id: id };
    const deleted = this.employeeModel.softDelete(filter);
    return deleted;
  }
}
