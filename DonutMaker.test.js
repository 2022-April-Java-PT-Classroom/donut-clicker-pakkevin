import DonutMaker from "./DonutMaker";

// Iteration 1: DonutMaker
describe("Donut Count & Auto Clicker", () => {
    // 1-FEATURE 1 : Have a way to count donuts.
    test("should add a donut and retrieve the total ct of 1", () => {
        const underTest = new DonutMaker(0, 0, 0);
        underTest.addDonut();
        expect(underTest.ctDonuts).toEqual(1);
    });
    // 1-FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.
    test("should purchase Auto Clicker by spending ctDonuts", () => {
        const underTest = new DonutMaker(100, 0);
        underTest.upgradeAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(1);
    });
    // 1-FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.
    test("cost of Auto Clicker should increase by 10% each purchase", () => {
        const underTest = new DonutMaker(110, 1);
        underTest.upgradeAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(2);
    });
    // 1-FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.
    test("should not allow purchase of 3rd Auto Clicker due ctDonuts of 120 is 1 too low", () => {
        const underTest = new DonutMaker(120, 2);
        underTest.upgradeAutoClicker();
        expect(underTest.ctDonuts).toEqual(120);
        expect(underTest.ctAutoClickers).toEqual(2);
    });

    test("should allow purchase of 3rd Auto Clicker due ctDonuts of 121 is just enough", () => {
        const underTest = new DonutMaker(121, 2);
        underTest.upgradeAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(3);
    });
    // 1-FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an 'Activate Auto Clickers' event is called.
    test("should add 3 to ctDonuts(100 --> 103) after 1 unit of time due to having ctAutoClickers = 3", () => {
        const underTest = new DonutMaker(100, 3, 0);
        underTest.activateAutoClickers();
        expect(underTest.ctDonuts).toEqual(103.0);
    });

});

// Iteration 2: DonutMaker
describe("Click Multiplier", () => {
    // 2-FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.
    test("should upgrade ctClickMultiplier(0 --> 1) for a cost of 10 ctDonuts(10 --> 0)", () => {
        const underTest = new DonutMaker(10, 0, 0);
        underTest.upgradeClickMultiplier();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctClickMultipliers).toEqual(1);
    });
    // 2-FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase. (rounds to first decimal place)
    test("costClickMultiplier should increase by 10% each purchase and is 19.5 for 14th upgrade (round down)", () => {
        const underTest = new DonutMaker(40, 0, 13);
        underTest.upgradeClickMultiplier();
        expect(underTest.costClickMultiplier).toEqual(34.5);
        expect(underTest.ctDonuts).toEqual(5.5);
        expect(underTest.ctClickMultipliers).toEqual(14);
    });
    test("costClickMultiplier should increase by 10% each purchase and is 131.1 for 28th upgrade (round up)", () => {
        const underTest = new DonutMaker(131.1, 0, 27);
        underTest.upgradeClickMultiplier();
        expect(underTest.costClickMultiplier).toEqual(131.1);
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctClickMultipliers).toEqual(28);
    });
    // 2-FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.
    test("should not be enought to buy 58th upgrade with ctDonuts < 2287.6", () => {
        const underTest = new DonutMaker(2287.5, 0, 57);
        underTest.upgradeClickMultiplier();
        expect(underTest.costClickMultiplier).toEqual(2287.6);
        expect(underTest.ctDonuts).toEqual(2287.5);
        expect(underTest.ctClickMultipliers).toEqual(57);
    });
    // 2-FEATURE 4 : The first Donut Multiplier should increase the value of a click 1.2x.
    test("click multiplier of 1 should increase ctDonuts by 1.2 per click", () => {
        const underTest = new DonutMaker(0, 0, 1);
        underTest.addDonut();
        expect(underTest.ctDonuts).toEqual(1.2);
    });
    // 2-FEATURE 5 : The amount the subsequent Donut Multipliers click bonus will go up exponentially.
    test("click multiplier of 3 should increase ctDonuts by 1.2 per click", () => {
        const underTest = new DonutMaker(0, 0, 3);
        underTest.addDonut();
        expect(underTest.ctDonuts).toEqual(1.7);
    });
    // 2-FEATURE 6 : The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.
    test("ctAutoClickers = 2 ctClickMultipliers = 9 should produce 5.98 Donuts per unit time", () => {
        const underTest = new DonutMaker(0, 2, 9);
        underTest.activateAutoClickers();
        expect(underTest.powerClick).toEqual(5.2);
        expect(underTest.ctDonuts).toEqual(10.4);
    });
    test("buy 34th AutoClicker", () => {
        const underTest = new DonutMaker(10000, 33, 2);
        underTest.upgradeAutoClicker();
        expect(underTest.costAutoClicker).toEqual(2322.5);
        expect(underTest.ctDonuts).toEqual(7677.5);
    });
});

// Adds a donut to the Donut Count for every button click
// Returns the Donut Count
// Purchases Auto Clickers with donuts
// Checks whether you have enough donuts to purchase an Auto Clicker
// Increases the count of Auto Clickers with each purchase of an Auto Clicker
// Increases Auto Clicker cost with each purchase of an Auto Clicker
// Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
// Purchases Donut Multipliers with donuts
// Checks whether you have enough donuts to purchase a Donut Multiplier
// Increases Donut Multiplier cost with each purchase of a Donut Multiplier
// Increases the count of Donut Multipliers with each purchase of an Donut Multiplier
// Calculates the number of donuts earned with each click based on the count of Donut Multipliers
// Resets the game state. This action should reset the game to zero donuts, zero Auto Clickers, and zero Donut Multipliers.