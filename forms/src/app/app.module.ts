import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HerocomponentComponent } from './herocomponent/herocomponent.component';
import { routes } from './app.router';
import { Register1Component } from './register1/register1.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AuthServiceService } from './services/auth.service.service';


@NgModule({
  declarations: [
    AppComponent,
    HerocomponentComponent,
    Register1Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StorageServiceModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
