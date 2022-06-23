export class Student {
 id! : number
 name!: string
 gender! : string
 hobbies! : string
 country ! : string
 address! : string
 doj! : string
 subAry = new Array<Subject>();
}

export class Subject{
    subject!: string
    marks!: string
}