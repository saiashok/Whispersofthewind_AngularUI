import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemReadComponent } from './poem-read/poem-read.component';
import { SwaggerService } from './service/service.component';
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
import {MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, MatOptionModule, MatPaginatorModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemReadComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatOptionModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    AutosizeModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
