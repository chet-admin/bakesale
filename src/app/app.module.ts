import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material'
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatInputModule } from '@angular/material';
import { Metrial } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CauseListComponent } from './components/cause-list/cause-list.component';
import { CauseDetailsComponent } from './components/cause-details/cause-details.component';
import { CauseItemComponent } from './components/cause-item/cause-item.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CauseListComponent,
    CauseItemComponent,
    CauseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Metrial,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


