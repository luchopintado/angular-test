import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSummaryComponent } from './user-form/user-summary/user-summary.component';
import { UserDetailsComponent } from './user-form/user-details/user-details.component';
import { AccountDetailsComponent } from './user-form/account-details/account-details.component';

import { MaterialModule } from './material.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
