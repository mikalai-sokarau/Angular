import { SliceToLengthPipe } from './slice-to-length.pipe';

describe('SliceToLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new SliceToLengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return short string without any changes', () => {
    const pipe = new SliceToLengthPipe();
    expect(pipe.transform('abc')).toBe('abc');
  });

  it('should add ... in the end of string if string is more than 247 symbols', () => {
    const pipe = new SliceToLengthPipe();
    const initialValue = "Like it or not you're living in it – this is the Digital Age. Computer programmes have all but infiltrated every aspect of our lives. Computer scientists theorise, design, develop, and apply the software and hardware for the programmes we use day in day out – sounds pretty important to us.";
    const expectValue = "Like it or not you're living in it – this is the Digital Age. Computer programmes have all but infiltrated every aspect of our lives. Computer scientists theorise, design, develop, and apply the software and hardware for the programmes we use day ...";
    expect(pipe.transform(initialValue)).toBe(expectValue);
  });
});
