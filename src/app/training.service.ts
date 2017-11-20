import { Injectable, Input } from '@angular/core';

import { Training, TRAINING_ITEM_CATEGORY } from './training';
import { TrainingItem, Information } from './trainingitem';
import { Result, TrainingExam, ExamNode } from './result';
import { ExamReport, Subject, DefaultSubjectUnit, TrainingSubjectUnit } from './exam';

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
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i202.png'],
        infos: [DEVICE_STATUS_1_1[1]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[2]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[3], DEVICE_STATUS_1_1[4], DEVICE_STATUS_1_1[5], DEVICE_STATUS_1_1[6]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t1i601.png'],
        infos: DEVICE_STATUS_1_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 1,
        name: '数控铣床上电',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i102.png', '/assets/img/t2i103.png'],
        infos: [DEVICE_STATUS_1_2[0]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i201.png'],
        infos: [DEVICE_STATUS_1_2[1]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[2]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[3], DEVICE_STATUS_1_2[4], DEVICE_STATUS_1_2[5], DEVICE_STATUS_1_2[6]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t2i601.png'],
        infos: DEVICE_STATUS_1_2,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 30000
    },
];

export const TRAININGS: Training[][] = [[
    {
        no: 1,
        title: '数控车床单元',
        items: [TRAINING_ITEMS[0], TRAINING_ITEMS[1], TRAINING_ITEMS[2], TRAINING_ITEMS[3], TRAINING_ITEMS[4], TRAINING_ITEMS[5]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: '数控铣床单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '智能检测单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '移动机器人单元',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '整线简明操作',
        items: [TRAINING_ITEMS[6], TRAINING_ITEMS[7], TRAINING_ITEMS[8], TRAINING_ITEMS[9], TRAINING_ITEMS[10], TRAINING_ITEMS[11]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 6,
        title: '结果',
        items: [],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.RESULT
    },
    {
        no: 7,
        title: '考核',
        items: [],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.EXAM
    }
],];

export const TRAINING_RESULT: Result[][] = [[
    {
        name: '数控车床单元',
        contents: [
            {
                name: '急停解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '常见报警解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '设备回参',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            }
        ]
    },
    {
        name: '数控铣床单元',
        contents: [
            {
                name: '急停解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '常见报警解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '设备回参',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            }
        ]
    },
    {
        name: '智能检测单元',
        contents: [
            {
                name: '急停解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '常见报警解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '设备回参',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            }
        ]
    },
    {
        name: '移动机器人单元',
        contents: [
            {
                name: '急停解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '常见报警解除',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            },
            {
                name: '设备回参',
                nodes: [
                    {
                        name: '操作次数',
                        content: '2次'
                    },
                    {
                        name: '操作时间',
                        content: '02:00'
                    },
                ]
            }
        ]
    },
],];

export const TRAINING_REPORT: ExamReport[] = [
    {
        student: {
            className: '数控1507',
            id: '150501151106',
            name: '潘楼忠',
        },
        dev: '整线',
        proj: '整线简明调试',
        opTime: '2017-11-20 17:00',
        total: 90,
        attitudeUnit: {
            title: '学生态度',
            perc: 20,
            subjects: [
                {
                    content: '按时到岗，在上课之前完成微信点名',
                    perc: 10,
                    value: 9
                },
                {
                    content: '按时结束，在下课之前完成微信退出',
                    perc: 10,
                    value: 9
                }],
        },
        trainingUnit: {
            title: '实训操作',
            perc: 60,
            subUnits: [
                {
                    title: '数控车床单元简明调试',
                    perc: 10,
                    subjects: [
                        {
                            content: '设备上电',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '气压调整',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '急停解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '报警解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '设备回参',
                            perc: 2,
                            value: 1.8
                        }
                    ]
                },
                {
                    title: '数控铣床单元简明调试',
                    perc: 10,
                    subjects: [
                        {
                            content: '设备上电',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '气压调整',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '急停解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '报警解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '设备回参',
                            perc: 2,
                            value: 1.8
                        }
                    ]
                },
                {
                    title: '机器人单元简明调试',
                    perc: 10,
                    subjects: [
                        {
                            content: '设备上电',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '气压调整',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '急停解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '报警解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '设备回参',
                            perc: 2,
                            value: 1.8
                        }
                    ]
                },
                {
                    title: '智能检测单元简明调试',
                    perc: 10,
                    subjects: [
                        {
                            content: '设备上电',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '气压调整',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '急停解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '报警解除',
                            perc: 2,
                            value: 1.8
                        },
                        {
                            content: '设备回参',
                            perc: 2,
                            value: 1.8
                        }
                    ]
                },
                {
                    title: '整线简明调试',
                    perc: 20,
                    subjects: [
                        {
                            content: '运行模式选择正确',
                            perc: 8,
                            value: 7.2
                        },
                        {
                            content: '机器上下料正确',
                            perc: 4,
                            value: 3.6
                        },
                        {
                            content: '机床加工过程正确',
                            perc: 4,
                            value: 3.6
                        },
                        {
                            content: '检测过程正确',
                            perc: 4,
                            value: 3.6
                        }
                    ]
                }
            ]
        },
        otherUnit: {
            title: '工艺规范',
            perc: 20,
            subjects: [
                {
                    content: '所有操作按照软件工艺规范顺序执行',
                    perc: 5,
                    value: 4.5
                },
                {
                    content: '调试工具在使用过程中正确使用',
                    perc: 5,
                    value: 4.5
                },
                {
                    content: '设备在使用过程中没有产生人为硬件故障',
                    perc: 10,
                    value: 9
                }],
        },
    }
];

@Injectable()
export class TrainingService {
    curTrainingIndex: number;

    getTrainings(no: number): Promise<Training[]> {
        return Promise.resolve(TRAININGS[no]);
    }

    getTrainingResult(no: number): Promise<Result[]> {
        return Promise.resolve(TRAINING_RESULT[no]);
    }

    getTrainingReport(no: number): Promise<ExamReport> {
        return Promise.resolve(TRAINING_REPORT[no]);
    }

    getCurTrainingIndex(): number {
        return this.curTrainingIndex;
    }

    setCurTrainingIndex(index: number) {
        this.curTrainingIndex = index;
    }
}
