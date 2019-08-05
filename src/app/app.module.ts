import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSummaryComponent } from './user-form/user-summary/user-summary.component';
import { UserDetailsComponent } from './user-form/user-details/user-details.component';
import { AccountDetailsComponent } from './user-form/account-details/account-details.component';

import { MaterialModule } from './material.module';
import { SummaryService } from './user-form/user-details/summary.service';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserSummaryComponent,
    UserDetailsComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    SummaryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
