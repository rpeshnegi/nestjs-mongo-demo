import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeService = module.get<EmployeeService>(EmployeeService);
    employeeController = module.get<EmployeeController>(EmployeeController);
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const result = {
        data: [],
        page: 1,
        totalRecords: 1
      };
      const res = await jest.spyOn(employeeService, 'findAll').mockImplementation();
      expect(await employeeController.findAll()).toBe(result);
    });
  });
});
