export class Information {
    content: string;
    type: number;
};

export class TrainingItem {
    no: number;
    name: string;
    imgs: string[];
    infos: Information[];
    videoURL: string;
    helpURL: string;
};
