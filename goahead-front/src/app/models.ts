export interface Course{
    id:number;
    name:string;
    author: string;
    photo: string;
    description:string;
    price:string;
}
export interface Teacher{
    id:number;
    name:string;
    photo:string;
    university:University;
    degree:number;
    reviews:Review[];

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
    description: string;
    photo: string;
    year: string;
} 
 export interface Login{
    token: string;
  }
  