import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ErrorComponent } from './error/error.component';

// Routing
import { UiRoute} from "./ui.routes";
import { RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AccountComponent,
    HomeComponent,
    TopNavComponent,
    TransactionComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UiRoute)
  ],
  exports: [
    TopNavComponent,
    HomeComponent
  ],
  providers: [],
})
export class UiModule { }
