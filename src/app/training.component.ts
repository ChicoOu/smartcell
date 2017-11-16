import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from './training';
import { TrainingService } from './training.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
    training: Training;
    index: number;

    constructor(private trainingService: TrainingService, private router: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.index = parseInt(this.router.snapshot.paramMap.get('index'), 10);
        this.trainingService.getTrainings().then(trainings => {
            if (this.index >= 0 && this.index < trainings.length) {
                this.training = trainings[this.index];
            }
            else {
                this.training = null;
            }
        });
    }
}
