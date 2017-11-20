export class Subject {
    content: string;
    perc: number;
    value: number;
}

export class TrainingSubjectUnit {
    title: string;
    perc: number;
    subUnits: DefaultSubjectUnit[]
}

export class DefaultSubjectUnit {
    title: string;
    perc: number;
    subjects: Subject[];
}

export class ExamReport {
    student: {
        className: string;
        id: string;
        name: string;
    };
    dev: string;
    proj: string;
    opTime: string;
    attitudeUnit: DefaultSubjectUnit;
    trainingUnit: TrainingSubjectUnit;
    otherUnit: DefaultSubjectUnit;
    total: number;
}
