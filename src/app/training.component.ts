import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training, TRAINING_ITEM_CATEGORY } from './training';
import { TrainingService } from './training.service';
import { TrainingItem } from 'app/trainingitem';
import { ModalComponent } from './util/modal.component';
import { Result, ExamNode } from './result';
import { ExamReport } from './exam';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
    training: Training;
    trainings: Training[];
    results: Result[];
    resultNodes: any[];
    report: ExamReport;
    trainingReport: any[];
    curItem: TrainingItem;
    no: number;
    index: number;
    title: string;
    passed: boolean;
    timeout: boolean;
    errorInfo: string;
    teacherPwd: string;
    stepTitle: string;

    constructor(private trainingService: TrainingService, private router: Router, private activeRouter: ActivatedRoute) {
        this.training = null;
        this.trainings = null;
        this.index = 0;
        this.passed = false;
        this.teacherPwd = '';
        this.stepTitle = '下一步';
        this.curItem = null;
        this.resultNodes = [];
        this.trainingReport = [];
    }

    reset(index: number, no: number): void {
        this.index = index;
        this.no = no;
        this.trainingService.getTrainings(no).then(trainings => {
            if (this.index >= 0 && this.index < trainings.length) {
                this.trainings = trainings;
                this.training = trainings[this.index];
                this.title = '训练项目' + (this.index + 1) + ': ' + this.training.title;
            }
            else {
                this.training = null;
            }

            if (this.training.category === TRAINING_ITEM_CATEGORY.EXAM ||
                this.training.category === TRAINING_ITEM_CATEGORY.RESULT) {
                this.passed = true;
                this.timeout = true;
            }

            if (this.index >= trainings.length - 1) {
                this.stepTitle = '完成';
            }
        });
        this.trainingService.getTrainingResult(no).then(results => {
            this.results = results;
            if( this.results != null ){
                results.forEach(result => {
                    result.contents.forEach(content => {
                        content.nodes.forEach(node => {
                            this.resultNodes.push({
                                node: node,
                                unit: result.name,
                                content: content.name,
                                span1: result.contents.length * content.nodes.length,
                                span2: content.nodes.length
                            });
                        })
                    });
                });
            }
        });
        this.trainingService.getTrainingReport(no).then(report => {
            this.report = report;
            if( this.report ){
                report.trainingUnit.subUnits.forEach(item => {
                    item.subjects.forEach(subject => {
                        this.trainingReport.push({
                            unit: item.title,
                            subject: subject
                        });
                    })
                });
            }
        });

        this.trainingService.curTrainingIndex = this.index;
    }

    ngOnInit(): void {
        let index = parseInt(this.activeRouter.snapshot.paramMap.get('index'), 10);
        let no = parseInt(this.activeRouter.snapshot.paramMap.get('id'), 10);
        this.reset(index, no);
    }

    onTrainingItemClicked(item: TrainingItem): void {
        this.training.curIndex = item.no;
        this.curItem = this.training.items[item.no - 1];
        if (this.training.no < this.trainings.length) {
            this.stepTitle = '下一步';
        }
        else {
            this.stepTitle = '完成';
        }
        this.defaultHandler();
    }

    defaultHandler(): void {
        let trainingItem = this.training.items[this.training.curIndex - 1];
        this.passed = false;
        this.timeout = false;
        if (trainingItem.devCommTimeout > 0) {
            setTimeout(() => {
                const infos = this.training.items[this.training.curIndex - 1].infos;
                if (infos && infos.length) {
                    for (let i = 0; i < infos.length; i++) {
                        infos[i].value = 1;
                    }

                    this.timeout = true;
                }
            }, trainingItem.devCommTimeout);
        }
    }

    confirmPassword(dlgConfirmation: ModalComponent): void {
        if (this.teacherPwd !== '123456') {
            // TODO: do something here?
            this.errorInfo = '密码错误！';
        }
        else {
            dlgConfirmation.hide();
            this.passed = true;
            this.errorInfo = '';
            this.teacherPwd = '';
        }
    }

    onConfirm(dlgWarning: ModalComponent, dlgConfirmation: ModalComponent): void {
        if (!this.timeout) {
            dlgWarning.show();
            return;
        }

        switch (this.no) {
            case 0:
                switch (this.index) {
                    default:
                        if (this.training.curIndex == 2) {
                            if (!this.passed) {
                                dlgConfirmation.show();
                            }
                        }
                        else {
                            this.passed = true;
                        }
                }
                break;
            default:
                this.passed = true;
                break;
        }
    }

    onNext(): void {
        if (this.training.curIndex < this.training.items.length) {
            this.training.curIndex++;
            this.curItem = this.training.items[this.training.curIndex - 1];
            if (this.training.no < this.trainings.length) {
                this.stepTitle = '下一步';
            }
            else {
                this.stepTitle = '完成';
            }
            this.defaultHandler();
        }
        else {
            // Navigate to another one?
            if (this.training.no >= this.trainings.length) {
                // Do nothing or go back to home?
            }
            else {
                let nextTraining = this.training.no + 1;
                this.trainingService.setCurTrainingIndex(nextTraining);
                this.curItem = null;
                this.training = null;
                this.reset(nextTraining - 1, this.no);
                this.passed = false;
                this.timeout = false;
                this.router.navigate(['/training', this.no, nextTraining - 1]);
            }
        }
    }
}
