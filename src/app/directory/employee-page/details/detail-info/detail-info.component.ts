import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
