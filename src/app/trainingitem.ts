export class Information {
    content: string;
    value: number;
};

export class TrainingItem {
    no: number;
    name: string;
    imgs: string[];
    infos: Information[];
    videoURL: string;
    helpURL: string;
};
