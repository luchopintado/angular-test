import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../../shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    employee: Employee;
    contactTypes = [];

    constructor(
        private route: ActivatedRoute,
        private employeeService: EmployeeService,
    ) { }

    ngOnInit() {
        this.getEmployee();
    }

    getEmployee() {
        const id = +this.route.snapshot.paramMap.get('id');
        this
            .employeeService
            .getEmployee(id)
            .subscribe(employee => {
                this.employee = employee;
                this.contactTypes = this.getContactTypes(employee);
            });
    }

    getContactTypes(employee: Employee) {
        return [
            { type: 'Call Office', value: employee.phoneOffice },
            { type: 'Call Mobile', value: employee.phoneMobile },
            { type: 'SMS', value: employee.phoneMobile },
            { type: 'Email', value: employee.email },
        ];
    }
}
