import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryComponent } from './directory.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { SearchbarComponent } from './home-page/searchbar/searchbar.component';
import { EmployeeListComponent } from './home-page/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './home-page/employee-list/employee-list-item/employee-list-item.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { DetailsComponent } from './employee-page/details/details.component';

@NgModule({
    declarations: [
        DirectoryComponent,
        HomePageComponent,
        HeaderComponent,
        SearchbarComponent,
        EmployeeListComponent,
        EmployeeListItemComponent,
        EmployeePageComponent,
        DetailsComponent
    ],
    imports: [ CommonModule ],
    exports: [
        DirectoryComponent,
        HomePageComponent,
        HeaderComponent,
        SearchbarComponent,
        EmployeeListComponent,
        EmployeeListItemComponent,
        EmployeePageComponent,
        DetailsComponent
    ],
    providers: [],
})
export class DirectoryModule {}