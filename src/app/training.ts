import { TrainingItem } from './trainingitem';

export enum TRAINING_ITEM_CATEGORY {
    DEFAULT = 0,
    RESULT = 1,
    EXAM = 2
};

export class Training {
    no: number;
    title: string;
    items: TrainingItem[];
    curIndex: number;
    splashImgURL: string;
    category: TRAINING_ITEM_CATEGORY; /* 0 --- 通用；1 --- 结果；2 --- 考核 */
};
