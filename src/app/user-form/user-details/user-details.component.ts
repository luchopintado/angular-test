import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { userDetailsValidator } from './validators';
import { SummaryService } from './summary.service';
import { Summary } from 'src/app/shared/summary.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private summaryService: SummaryService) { }

  ngOnInit() {
    this.formGroup = this.fb.group(userDetailsValidator);

    this.formGroup.valueChanges.subscribe(formData => {
      this.summaryService.changeSummary(new Summary(formData.name, formData.bio));
    });
  }

}
