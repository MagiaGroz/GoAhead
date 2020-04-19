export class Course{
    id:number;
    name:string;
    description:string;
    price:string;
    teachers:Teacher;
}
export class Teacher{
    id:number;
    name:string;
    photo:ImageBitmap;
    university:string;
    degree:number;
    reviews:Review;

}
export class Review{
    id:number;
    description:string;
    liked:boolean;

}
 export class Login{
    token: string;
  }
  