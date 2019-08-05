import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  @Input() type = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() {
  }

}
