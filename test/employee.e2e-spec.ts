import * as request from 'supertest';
import { Test } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import { EmployeeModule } from 'src/employee/employee.module';
import { EmployeeService } from 'src/employee/employee.service';

describe('Employees', () => {
    let app: INestApplication;
    let employeesService = {
        findAll: () => (
            {
                data: [],
                page: 1,
                totalRecords: 1
            }
        )
    };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [EmployeeModule],
        })
            .overrideProvider(EmployeeService)
            .useValue(employeesService)
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET employee`, () => {
        return request(app.getHttpServer())
            .get('/employee')
            .expect(200)
            .expect({
                data: employeesService.findAll(),
            });
    });

    afterAll(async () => {
        await app.close();
    });
});
