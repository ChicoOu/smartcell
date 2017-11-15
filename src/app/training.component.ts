import { Component } from '@angular/core';
import { Training } from './training';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent {
    training: Training;
}
