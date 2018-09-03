import { CourseInterface } from './course-interface';

export class Course implements CourseInterface {
  constructor(
    public id: string,
    public title: string,
    public date: string,
    public duration: string,
    public creationDate: Date,
    public description: string,
    public isTopRated: string,
    public img: string,
    public buttonNames: Array<string>
  ) {}
}
