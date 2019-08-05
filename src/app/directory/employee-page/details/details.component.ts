import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  contactTypes = [
    { type: 'Call Office', value: '781-000-0002' },
    { type: 'Call Mobile', value: '617-000-0002' },
    { type: 'SMS', value: '617-000-0002' },
    { type: 'Email', value: 'jtaylor@fakemail.com' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
