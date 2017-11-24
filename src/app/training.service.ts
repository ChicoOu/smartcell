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

export const DEVICE_STATUS_2_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '供货传送带入料口信号', value: 0 },
    { content: '供货传送带分拣口信号', value: 0 },
    { content: '供货传送带取料口信号', value: 0 },
    { content: '供货分拣机构左侧信号', value: 0 },
    { content: '供货分拣机构右侧信号', value: 0 },
    { content: '卸货传送带入料口信号', value: 0 },
    { content: '卸货传送带分拣口信号', value: 0 },
    { content: '卸货传送带取料口信号', value: 0 },
    { content: '卸货分拣机构左侧信号', value: 0 },
    { content: '供卸货分拣机构右侧信号', value: 0 },
    { content: '检测运行时间调试完成', value: 0 },
    { content: '修改输出信号点正确', value: 0 },
    { content: '修改输入信号点正确', value: 0 },
    { content: '程序编写点一完成', value: 0 },
    { content: '程序编写点二完成', value: 0 },
    { content: '检测运行时间调试完成', value: 0 },
    { content: '修改输出信号点正确', value: 0 },
    { content: '修改输入信号点正确', value: 0 },
    { content: '程序编写点一完成', value: 0 },
    { content: '程序编写点二完成', value: 0 },
    { content: '机器人供货传送带调试完成', value: 0 },
    { content: '机器人卸货传送带调试完成', value: 0 }
];

export const DEVICE_STATUS_3_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '常见警报1解除', value: 0 },
    { content: '常见警报2解除', value: 0 },
    { content: '常见警报3解除', value: 0 },
    { content: '其他警报解除', value: 0 },
    { content: '程序中编写时间功能点完成', value: 0 },
    { content: '简单常开常闭编写', value: 0 },
    { content: '简单逻辑编写', value: 0 },
    { content: '切削指令编写', value: 0 },
    { content: '切槽指令编写', value: 0 },
];

export const DEVICE_STATUS_4_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '常见警报1解除', value: 0 },
    { content: '常见警报2解除', value: 0 },
    { content: '常见警报3解除', value: 0 },
    { content: '其他警报解除', value: 0 },
    { content: '程序中编写时间功能点调试完成', value: 0 },
    { content: '输入输出点调试', value: 0 },
    { content: '简单逻辑调试', value: 0 },
    { content: '切削指令调试', value: 0 },
    { content: '机器人车床位置上料调试', value: 0 },
    { content: '机器人车床位置下料调试', value: 0 },

];

export const DEVICE_STATUS_5_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '常见警报1解除', value: 0 },
    { content: '常见警报2解除', value: 0 },
    { content: '常见警报3解除', value: 0 },
    { content: '其他警报解除', value: 0 },
    { content: '程序中编写时间功能点完成', value: 0 },
    { content: '简单常开常闭编写', value: 0 },
    { content: '简单逻辑编写', value: 0 },
    { content: '切削指令编写', value: 0 },
    { content: '切槽指令编写', value: 0 },
];

export const DEVICE_STATUS_6_1: Information[] = [
    { content: '设备上电', value: 0 },
    { content: '常见警报1解除', value: 0 },
    { content: '常见警报2解除', value: 0 },
    { content: '常见警报3解除', value: 0 },
    { content: '其他警报解除', value: 0 },
    { content: '程序中编写时间功能点调试完成', value: 0 },
    { content: '输入输出点调试', value: 0 },
    { content: '简单逻辑调试', value: 0 },
    { content: '切削指令调试', value: 0 },
    { content: '机器人铣床位置上料调试', value: 0 },
    { content: '机器人铣床位置下料调试', value: 0 },

];


export const TRAINING_ITEMS: TrainingItem[] = [
    {
        no: 1,
        name: '数控车床上电',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i102.png', '/assets/img/t1i103.png'],
        infos: [DEVICE_STATUS_1_1[0]],
        videoURL: '/assets/video/4.mp4',
        helpURL: '/assets/help/1-1.pdf',
        devCommTimeout: 3000
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i202.png'],
        infos: [DEVICE_STATUS_1_1[1]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[2]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[3], DEVICE_STATUS_1_1[4], DEVICE_STATUS_1_1[5], DEVICE_STATUS_1_1[6]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t1i101.png', '/assets/img/t1i301.png'],
        infos: [DEVICE_STATUS_1_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t1i601.png'],
        infos: DEVICE_STATUS_1_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '数控铣床上电',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i102.png', '/assets/img/t2i103.png'],
        infos: [DEVICE_STATUS_1_2[0]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 2,
        name: '调整工作气压',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i201.png'],
        infos: [DEVICE_STATUS_1_2[1]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 3,
        name: '解除急停警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[2]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 4,
        name: '解除常见警报',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[3], DEVICE_STATUS_1_2[4], DEVICE_STATUS_1_2[5], DEVICE_STATUS_1_2[6]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 5,
        name: '机床回参',
        imgs: ['/assets/img/t2i101.png', '/assets/img/t2i301.png'],
        infos: [DEVICE_STATUS_1_2[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 6,
        name: '最终状态确认',
        imgs: ['/assets/img/t2i601.png'],
        infos: DEVICE_STATUS_1_2,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no:1,
        name:'设备上电',
        imgs:['/assets/img/2t1i101.png'],
        infos:[DEVICE_STATUS_2_1[0]],
        videoURL:'#',
        helpURL:'#',
        devCommTimeout:3000
    },
    {
        no: 1,
        name: 'i/o信号检查',
        imgs: ['/assets/img/2t1i101.png'],
        infos: [DEVICE_STATUS_2_1[1],DEVICE_STATUS_2_1[2],DEVICE_STATUS_2_1[3],DEVICE_STATUS_2_1[4],DEVICE_STATUS_2_1[5],DEVICE_STATUS_2_1[6],DEVICE_STATUS_2_1[7],DEVICE_STATUS_2_1[8],DEVICE_STATUS_2_1[9],DEVICE_STATUS_2_1[10]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '程序调试与排故',
        imgs: ['/assets/img/2t1i101.png', '/assets/img/2t3i101.png'],
        infos: [DEVICE_STATUS_2_1[11],DEVICE_STATUS_2_1[12],DEVICE_STATUS_2_1[13],DEVICE_STATUS_2_1[14],DEVICE_STATUS_2_1[15]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机器人上下料调试',
        imgs: ['/assets/img/2t1i101.png', '/assets/img/2t4i101.png'],
        infos: [DEVICE_STATUS_2_1[16], DEVICE_STATUS_2_1[17]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '最终状态确认',
        imgs: ['/assets/img/2t1i101.png', '/assets/img/2t4i101.png'],
        infos: DEVICE_STATUS_2_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no:1,
        name:'设备上电',
        imgs:['/assets/img/t1i102.png'],
        infos:[DEVICE_STATUS_3_1[0]],
        videoURL:'#',
        helpURL:'#',
        devCommTimeout:3000
    },
    {
        no: 1,
        name: '常见警报解除',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_3_1[1],DEVICE_STATUS_3_1[2],DEVICE_STATUS_3_1[3],DEVICE_STATUS_3_1[4]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床plc程序编写',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_3_1[5],DEVICE_STATUS_3_1[6],DEVICE_STATUS_3_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床NC程序编写',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_3_1[8], DEVICE_STATUS_3_1[9]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '最终状态确认',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: DEVICE_STATUS_3_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no:1,
        name:'设备上电',
        imgs:['/assets/img/t1i102.png'],
        infos:[DEVICE_STATUS_4_1[0]],
        videoURL:'#',
        helpURL:'#',
        devCommTimeout:3000
    },
    {
        no: 1,
        name: '常见警报解除',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_4_1[1],DEVICE_STATUS_4_1[2],DEVICE_STATUS_4_1[3],DEVICE_STATUS_4_1[4]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床plc程序调试',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_4_1[5],DEVICE_STATUS_4_1[6],DEVICE_STATUS_4_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床NC程序调试',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_4_1[8], DEVICE_STATUS_4_1[9]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机器人车床位置调试',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: [DEVICE_STATUS_4_1[10], DEVICE_STATUS_4_1[11]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '最终状态确认',
        imgs: ['/assets/img/t1i103.png','/assets/img/t1i601.png'],
        infos: DEVICE_STATUS_4_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no:1,
        name:'设备上电',
        imgs:['/assets/img/t2i102.png'],
        infos:[DEVICE_STATUS_5_1[0]],
        videoURL:'#',
        helpURL:'#',
        devCommTimeout:3000
    },
    {
        no: 1,
        name: '常见警报解除',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_5_1[1],DEVICE_STATUS_5_1[2],DEVICE_STATUS_5_1[3],DEVICE_STATUS_5_1[4]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床plc程序编写',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_5_1[5],DEVICE_STATUS_5_1[6],DEVICE_STATUS_5_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床NC程序编写',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_5_1[8], DEVICE_STATUS_5_1[9]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '最终状态确认',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: DEVICE_STATUS_5_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no:1,
        name:'设备上电',
        imgs:['/assets/img/t2i102.png'],
        infos:[DEVICE_STATUS_6_1[0]],
        videoURL:'#',
        helpURL:'#',
        devCommTimeout:3000
    },
    {
        no: 1,
        name: '常见警报解除',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_6_1[1],DEVICE_STATUS_6_1[2],DEVICE_STATUS_6_1[3],DEVICE_STATUS_6_1[4]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床plc程序调试',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_6_1[5],DEVICE_STATUS_6_1[6],DEVICE_STATUS_6_1[7]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机床NC程序调试',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_6_1[8], DEVICE_STATUS_6_1[9]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '机器人铣床位置调试',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: [DEVICE_STATUS_6_1[10], DEVICE_STATUS_6_1[11]],
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    },
    {
        no: 1,
        name: '最终状态确认',
        imgs: ['/assets/img/t2i103.png','/assets/img/t2i101.png'],
        infos: DEVICE_STATUS_6_1,
        videoURL: '#',
        helpURL: '#',
        devCommTimeout: 3000
    }
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
],
[
{
        no: 1,
        title: '设备上电',
        items: [TRAINING_ITEMS[12]],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: 'io信号检查',
        items: [TRAINING_ITEMS[13]],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '程序调试与排故',
        items: [TRAINING_ITEMS[14]],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '机器人上下料调试',
        items: [TRAINING_ITEMS[15]],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '最终状态确认',
        items: [TRAINING_ITEMS[16]],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 6,
        title: '结果',
        items: [],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.RESULT
    },
    {
        no: 7,
        title: '考核',
        items: [],
        splashImgURL: '/assets/img/2t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.EXAM
    }
],
[
{
        no: 1,
        title: '设备上电',
        items: [TRAINING_ITEMS[17]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: '常见警报解除',
        items: [TRAINING_ITEMS[18]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '机床plc程序编写',
        items: [TRAINING_ITEMS[19]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '机床NC程序编写',
        items: [TRAINING_ITEMS[20]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '最终状态确认',
        items: [TRAINING_ITEMS[21]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 6,
        title: '结果',
        items: [],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.RESULT
    },
    {
        no: 7,
        title: '考核',
        items: [],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.EXAM
    }
],
[
{
        no: 1,
        title: '设备上电',
        items: [TRAINING_ITEMS[22]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: '常见警报解除',
        items: [TRAINING_ITEMS[23]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '机床plc程序调试',
        items: [TRAINING_ITEMS[24]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '机床NC程序调试',
        items: [TRAINING_ITEMS[25]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '机器人车床位置调试',
        items: [TRAINING_ITEMS[26]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 6,
        title: '最终状态确认',
        items: [TRAINING_ITEMS[27]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 7,
        title: '结果',
        items: [],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.RESULT
    },
    {
        no: 8,
        title: '考核',
        items: [],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.EXAM
    }
],
[
{
        no: 1,
        title: '设备上电',
        items: [TRAINING_ITEMS[28]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: '常见警报解除',
        items: [TRAINING_ITEMS[29]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '机床plc程序编写',
        items: [TRAINING_ITEMS[30]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '机床NC程序编写',
        items: [TRAINING_ITEMS[31]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '最终状态确认',
        items: [TRAINING_ITEMS[32]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
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
],
[
{
        no: 1,
        title: '设备上电',
        items: [TRAINING_ITEMS[33]],
        splashImgURL: '/assets/img/t1splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 2,
        title: '常见警报解除',
        items: [TRAINING_ITEMS[34]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 3,
        title: '机床plc程序调试',
        items: [TRAINING_ITEMS[35]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 4,
        title: '机床NC程序调试',
        items: [TRAINING_ITEMS[36]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 5,
        title: '机器人铣床位置调试',
        items: [TRAINING_ITEMS[37]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 6,
        title: '最终状态确认',
        items: [TRAINING_ITEMS[38]],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: -1,
        category: TRAINING_ITEM_CATEGORY.DEFAULT
    },
    {
        no: 7,
        title: '结果',
        items: [],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.RESULT
    },
    {
        no: 8,
        title: '考核',
        items: [],
        splashImgURL: '/assets/img/t2splash.png',
        curIndex: 0,
        category: TRAINING_ITEM_CATEGORY.EXAM
    }
]];

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
