describe('my first test', () => {
    let sut = {a: false};

    beforeEach(() => {
        sut = {a: false};
    })

    it('shoud be true if true', () => {
        // Arrange
        sut.a = false;

        // Act
        sut.a = true;

        // Assert
        expect(sut.a).toBe(true);
    })
})