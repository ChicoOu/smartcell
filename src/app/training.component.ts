import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from './training';
import { TrainingService } from './training.service';
import { TrainingItem } from 'app/trainingitem';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
    training: Training;
    trainings: Training[];
    index: number;
    title: string;

    constructor(private trainingService: TrainingService, private router: ActivatedRoute) {
        this.training = null;
        this.trainings = null;
        this.index = 0;
    }

    ngOnInit(): void {
        this.index = parseInt(this.router.snapshot.paramMap.get('index'), 10);
        this.trainingService.getTrainings().then(trainings => {
            if (this.index >= 0 && this.index < trainings.length) {
                this.trainings = trainings;
                this.training = trainings[this.index];
                this.title = '训练项目' + (this.index + 1) + ': ' + this.training.title;
            }
            else {
                this.training = null;
            }
        });
        this.trainingService.curTrainingIndex = this.index;
    }

    onTrainingItemClicked(item: TrainingItem): void {
        this.training.curIndex = item.no;
        this.defaultHandler();
    }

    defaultHandler(): void {
        setTimeout(() => {
            const infos = this.training.items[this.training.curIndex - 1].infos;
            if (infos && infos.length) {
                for (let i = 0; i < infos.length; i++) {
                    infos[i].value = 1;
                }
            }
        }, 30000);
    }
}
