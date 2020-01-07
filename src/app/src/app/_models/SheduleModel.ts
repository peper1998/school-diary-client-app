import { Time } from "@angular/common";

export class SheduleModel{
    id:number;
    teacherId:number;
    classroomId:number;
    schoolClassId:number;
    day:number;
    startTime: Date;
    endTime:Date;
    constructor( id:number,
        teacherId:number,
        classroomId:number,
        schoolClassId:number,
        day:number,
        startTime: Date,
        endTime:Date){
            this.id = id;
            this.teacherId=teacherId;
            this.classroomId=classroomId;
            this.schoolClassId=schoolClassId;
            this.day=day;
            this.startTime=startTime;
            this.endTime=endTime;
    }
}