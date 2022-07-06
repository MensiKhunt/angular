
export class Student{
    id:number;
    name:string;
    address:string;
    gender: string
    cars:string;
    doj:Date;
    hobbies:string;
    country : string
    subject = new Array<Subject>();
    }
    export class Subject{
        subjectname!: string
        marks!: string
    }
