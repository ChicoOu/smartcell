export class ExamNode {
    name: string;
    content: string;
}

export class TrainingExam {
    name: string;
    nodes: ExamNode[];
}

export class Result {
    name: string;
    contents: TrainingExam[]
}
