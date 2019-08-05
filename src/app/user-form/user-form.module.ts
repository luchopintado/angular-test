import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { UserFormComponent } from './user-form.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

import { SummaryService } from './user-details/summary.service';

@NgModule({
    declarations: [
        UserFormComponent,
        UserSummaryComponent,
        UserDetailsComponent,
        AccountDetailsComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        UserFormComponent,
    ],
    providers: [
        SummaryService,
    ],
})
export class UserFormModule {}
