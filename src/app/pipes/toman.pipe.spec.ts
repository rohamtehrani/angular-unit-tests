import { TomanPipe } from './toman.pipe';

describe('TomanPipe', () => {
  let pipe = new TomanPipe();

  beforeEach(() => {
    pipe = new TomanPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('changes 1000 Rial to 100 Toman', () => {
    expect(pipe.transform(1000)).toEqual(100);
  })

  it('change string of "1000" to 100', () => {
    expect(pipe.transform("1000")).toEqual(100);
  })

  it('Round down the amount', () => {
    expect(pipe.transform(79)).toEqual(7);
  })

  it('Doesn\'t mess with zero', () => {
    expect(pipe.transform(0)).toEqual(0);
  })

  it('Doesn\'t mess with "0"', () => {
    expect(pipe.transform("0")).toEqual(0);
  })

  it('Should return zero if received null', () => {
    expect(pipe.transform(null)).toEqual(0);
  })
});
