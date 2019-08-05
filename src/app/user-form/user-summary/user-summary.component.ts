import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../../shared/summary.model';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  @Input() summary: Summary;

  constructor() { }

  ngOnInit() {
  }

}
