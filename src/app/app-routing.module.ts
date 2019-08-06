import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomePageComponent } from './directory/home-page/home-page.component';
import { EmployeePageComponent } from './directory/employee-page/employee-page.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/user-form', pathMatch: 'full' },
    { path: 'user-form', component: UserFormComponent },
    { path: 'directory', component: DirectoryComponent, children: [
        { path: '', component: HomePageComponent },
        { path: 'employee/:id', component: EmployeePageComponent },
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}