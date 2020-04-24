export interface Course{
    id:number;
    name:string;
    author: string;
    photo: string;
    description:string;
    price:string;
    user:number;
}
export interface Teacher{
    id:number;
    name:string;
    photo:string;
    university:University;
    degree:number;
    course:Course;

}
export interface Review{
    id:number;
    author:string;
    description:string;
    liked:boolean;
    teacher: Teacher;
}

export interface University{
    name: string;
    photo: string;
    description: string;
    year: string;
} 
 export interface Token{
    token: string;
  }
  