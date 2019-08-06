import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() title = '';
    showBack = true;

    constructor(location: Location, router: Router) {
        router.events.subscribe((obj: any) => {
            if (obj.url === '/directory') {
                this.showBack = false;
            }
        });
    }

    ngOnInit() {
    }
}
