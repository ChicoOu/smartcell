import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training.component';
import { TrainingService } from './training.service';
import { AppRoutingModule } from './app-routing.module';
import {ModalComponent} from './util/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        TrainingComponent,
        ModalComponent
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
