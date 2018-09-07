import { NewCourseModule } from './new-course.module';

describe('NewCourseModule', () => {
  let newCourseModule: NewCourseModule;

  beforeEach(() => {
    newCourseModule = new NewCourseModule();
  });

  it('should create an instance', () => {
    expect(newCourseModule).toBeTruthy();
  });
});
