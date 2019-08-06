import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../../shared/employee.model';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log('click');
  }
}
