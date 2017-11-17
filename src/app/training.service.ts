import { Injectable, Input } from '@angular/core';

import { Training } from './training';
import { TrainingItem, Information } from './trainingitem';

export const DEVICE_STATUS_1_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '调整工作气压', value: 0 },
    { content: '解除急停警报', value: 0 },
    { content: 'Alarm1', value: 0 },
    { content: 'Alarm2', value: 0 },
    { content: 'Alarm3', value: 0 },
    { content: '其他报警', value: 0 },
    { content: '设备回参', value: 0 }
];

export const DEVICE_STATUS_1_2: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '调整工作气压', value: 0 },
    { content: '解除急停警报', value: 0 },
    { content: 'Alarm1', value: 0 },
    { content: 'Alarm2', value: 0 },
    { content: 'Alarm3', value: 0 },
    { content: '其他报警', value: 0 },
    { content: '设备回参', value: 0 }
];

export const DEVICE_STATUS_1_3: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '解除急停警报', value: 0 },
    { content: 'Alarm', value: 0 },
    { content: '设备回参', value: 0 }
];

export const DEVICE_STATUS_1_4: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '调整工作气压', value: 0 },
    { content: '解除急停警报', value: 0 },
    { content: 'Alarm1', value: 0 },
    { content: 'Alarm2', value: 0 },
    { content: 'Alarm3', value: 0 },
    { content: '其他报警', value: 0 },
    { content: '设备回参', value: 0 }
];

export const DEVICE_STATUS_1_5: Information[] = [
    { content: '车床自动模式', value: 0 },
    { content: '机器人自动模式', value: 0 },
    { content: '铣床自动模式', value: 0 },
    { content: '智能检测台自动模式', value: 0 },
    { content: '铣床加工程序确认', value: 0 },
    { content: '车床加工程序确认', value: 0 },
    { content: '智能检测方案选择', value: 0 },
    { content: '上料准备', value: 0 },
    { content: '下料准备', value: 0 }
];

export const TRAINING_ITEMS: TrainingItem[] = [
    {
        no: 1,
        name: '数控车床上电',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i102.png', '/assets/img/t1i103.png'],
        infos: [DEVICE_STATUS_1_1[0]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i202.png'],
        infos: [DEVICE_STATUS_1_1[1]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[2]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[3], DEVICE_STATUS_1_1[4], DEVICE_STATUS_1_1[5], DEVICE_STATUS_1_1[6]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[7]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t1i601.png'],
        infos: DEVICE_STATUS_1_1,
        videoURL: '',
        helpURL: ''
    },
    {
        no: 1,
        name: '数控铣床上电',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i102.png', '/assets/img/t2i103.png'],
        infos: [DEVICE_STATUS_1_2[0]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i201.png'],
        infos: [DEVICE_STATUS_1_2[1]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[2]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[3], DEVICE_STATUS_1_2[4], DEVICE_STATUS_1_2[5], DEVICE_STATUS_1_2[6]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[7]],
        videoURL: '',
        helpURL: ''
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t2i601.png'],
        infos: DEVICE_STATUS_1_2,
        videoURL: '',
        helpURL: ''
    },
];

export const TRAININGS: Training[] = [
    {
        no: 1,
        title: '数控车床单元',
        items: [TRAINING_ITEMS[0], TRAINING_ITEMS[1], TRAINING_ITEMS[2], TRAINING_ITEMS[3], TRAINING_ITEMS[4], TRAINING_ITEMS[5]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1
    },
    {
        no: 2,
        title: '数控铣床单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    },
    {
        no: 3,
        title: '智能检测单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    },
    {
        no: 4,
        title: '移动机器人单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    },
    {
        no: 5,
        title: '整线简明操作',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    },
    {
        no: 6,
        title: '结果',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    },
    {
        no: 7,
        title: '考核',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1
    }
];

@Injectable()
export class TrainingService {
    curTrainingIndex: number;

    getTrainings(): Promise<Training[]> {
        return Promise.resolve(TRAININGS);
    }

    getCurTrainingIndex(): number {
        return this.curTrainingIndex;
    }

    setCurTrainingIndex(index: number) {
        this.curTrainingIndex = index;
    }
}