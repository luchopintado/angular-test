import { Component, OnInit } from '@angular/core';

import { Employee } from '../../../shared/employee.model';
import { EmployeeService } from '../../../shared/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this
      .employeeService
      .getEmployees()
      .subscribe(employees => this.employees = employees);
  }

}
