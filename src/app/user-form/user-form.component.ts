import { Component, OnInit } from '@angular/core';
import { SummaryService } from './user-details/summary.service';
import { Summary } from '../shared/summary.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  summaryData = new Summary('', '');

  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.summaryService.currentSummary.subscribe(summary => this.summaryData = summary);
  }

}
