import tests from "../../testJavaS.js";

describe("Random Number Function", () => {
  describe("When a random number is passed in", () => {
      it("returns the number", () => {
          // Arrange
          const test = 7;

          // Act
          const result = tests.getRandomNumber(test);

          // Assert
          expect(result).to.be.a("number");
      });
    });

    describe("when string is passed in", () => {
      it("returns NaN", () => {
        // Arrange
        const test = "milad";

        // Act
        const result = tests.getRandomNumber(test);

        // Assert
        expect(result).to.be.NaN;
      });
    });

    describe("when boolean is passed in", () => {
      it("returns true", () => {
        // Arrange
        const test = true;

        // Act
        const result = tests.getRandomNumber(test);

        // Assert
        expect(result).to.equal(0);
      });
    });

    describe("when null is passed in", () => {
      it("returns null", () => {
        // Arrange
        const test = null;

        // Act
        const result = tests.getRandomNumber(test);

        // Assert
        expect(result).to.equal(0);
      });
    });

    describe("when an empty string is passed in", () => {
      it("returns 0", () => {
        // Arrange
        const test = "";

        // Act
        const result = tests.getRandomNumber(test);

        // Assert
        expect(result).to.eq(0);
      });
    });
  });

  describe("Random Color Function", () => {
    describe("when number is passed in", () => {
      it("returns String", () => {
        // Arrange
        const test = 1;

        // Act
        const result = tests.getRandomColor(test);

        // Assert
        expect(result).to.be.a("String");
      });
    });

    describe("when String is passed in", () => {
      it("returns not a Number", () => {
        // Arrange
        const test = "Milad";

        // Act
        const result = tests.getRandomColor(test);

        // Assert
        expect(result).not.to.be.a("Number");
      });
    });

    describe("when null is passed in", () => {
      it("Should Not return null", () => {
        // Arrange
        const test = null;

        // Act
        const result = tests.getRandomColor(test);

        // Assert
        expect(result).not.to.equal(0);
      });
    });

    describe("when two numbers are passed in", () => {
      it("returns String", () => {
        // Arrange
        const test = (1,2);

        // Act
        const result = tests.getRandomColor(test);

        // Assert
        expect(result).to.be.a("String");
      });
    });

    describe("when boolean is passed in", () => {
      it("returns False", () => {
        // Arrange
        const test = true;

        // Act
        const result = tests.getRandomNumber(test);

        // Assert
        expect(result).not.to.equal(false);
      });
    });
  });




  