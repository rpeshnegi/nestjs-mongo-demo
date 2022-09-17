import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Types } from 'mongoose';
import { Request } from 'express';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @ApiQuery({
    name: 'limit',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'show_delete',
    required: false,
    type: Boolean,
  })
  findAll(@Req() request: Request) {
    return this.employeeService.findAll(request);
  }


  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: Types.ObjectId) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: Types.ObjectId) {
    return this.employeeService.remove(id);
  }
}
