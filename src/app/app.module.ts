import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training.component';
import { TrainingService } from './training.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    declarations: [
        AppComponent,
        TrainingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [TrainingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
