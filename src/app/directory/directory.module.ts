import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDirectoryModule } from '../shared/material-directory.module';

import { DirectoryComponent } from './directory.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './home-page/searchbar/searchbar.component';
import { EmployeeListComponent } from './home-page/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './home-page/employee-list/employee-list-item/employee-list-item.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { DetailsComponent } from './employee-page/details/details.component';
import { IconComponent } from './employee-page/details/icon.component';
import { DetailItemComponent } from './employee-page/details/detail-item/detail-item.component';
import { DetailInfoComponent } from './employee-page/details/detail-info/detail-info.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DirectoryComponent,
        HomePageComponent,
        HeaderComponent,
        SearchbarComponent,
        EmployeeListComponent,
        EmployeeListItemComponent,
        EmployeePageComponent,
        DetailsComponent,
        IconComponent,
        DetailItemComponent,
        DetailInfoComponent,
    ],
    imports: [
        CommonModule,
        MaterialDirectoryModule,
        RouterModule,
    ],
    exports: [
        DirectoryComponent,
    ],
    providers: [],
})
export class DirectoryModule {}