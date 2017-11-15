import { Injectable, Input } from '@angular/core';

import { Training } from './training';
import { TrainingItem, Information } from './trainingitem';

export const INFORMATIONS: Information[] = [
    { content: '设备上电', type: 0 },
    { content: '调整工作气压', type: 0 },
    { content: '解除急停警报', type: 0 },
    { content: '设备回参', type: 0 }
];

export const TRAINING_ITEMS: TrainingItem[] = [
    { no: 1, name: '数控车床上电', imgs: [''], infos: [INFORMATIONS[0]], videoURL: '', helpURL: '' },
    { no: 2, name: '调整工作气压', imgs: [''], infos: [INFORMATIONS[1]], videoURL: '', helpURL: '' },
    { no: 3, name: '解除急停警报', imgs: [''], infos: [INFORMATIONS[2]], videoURL: '', helpURL: '' },
    { no: 4, name: '解除常见警报', imgs: [''], infos: null, videoURL: '', helpURL: '' },
    { no: 5, name: '机床回参', imgs: [''], infos: [INFORMATIONS[3]], videoURL: '', helpURL: '' },
    { no: 6, name: '最终状态确认', imgs: [''], infos: null, videoURL: '', helpURL: '' },
    { no: 1, name: '数控铣床上电', imgs: [''], infos: [INFORMATIONS[0]], videoURL: '', helpURL: '' },
    { no: 2, name: '调整工作气压', imgs: [''], infos: [INFORMATIONS[1]], videoURL: '', helpURL: '' },
    { no: 3, name: '解除急停警报', imgs: [''], infos: [INFORMATIONS[2]], videoURL: '', helpURL: '' },
    { no: 4, name: '解除常见警报', imgs: [''], infos: null, videoURL: '', helpURL: '' },
    { no: 5, name: '机床回参', imgs: [''], infos: [INFORMATIONS[3]], videoURL: '', helpURL: '' },
    { no: 6, name: '最终状态确认', imgs: [''], infos: null, videoURL: '', helpURL: '' },
];

export const TRAININGS: Training[] = [
    {
        title: '数控车床单元',
        items: [TRAINING_ITEMS[0], TRAINING_ITEMS[1], TRAINING_ITEMS[2], TRAINING_ITEMS[3], TRAINING_ITEMS[4], TRAINING_ITEMS[5]],
        splashImgURL: '',
        curIndex: -1
    },
    {
        title: '数控铣床单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '',
        curIndex: -1
    }
];

@Injectable()
export class JobService {
    getJobs(): Promise<Training[]> {
        return Promise.resolve(TRAININGS);
    }
}