import { TomanPipe } from './toman.pipe';

describe('TomanPipe', () => {
  it('create an instance', () => {
    const pipe = new TomanPipe();
    expect(pipe).toBeTruthy();
  });

  it('changes 1000 Rial to 100 Toman', () => {
    // Arrange
    const pipe = new TomanPipe();

    //Act
    const result = pipe.transform(1000);

    // Assert
    expect(result).toEqual(100);
  })
});
