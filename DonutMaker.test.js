import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {
    //1-FEATURE 1 : Have a way to count donuts.
    test("should add a donut and retrieve the total ct of 1", () => {
        const underTest = new DonutMaker(0);
        underTest.addDonut();
        expect(underTest.ctDonuts).toEqual(1);
    });
    //1-FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.
    test("should purchase Auto Clicker by spending ctDonuts", () => {
        const underTest = new DonutMaker(100, 0);
        underTest.addAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(1);
    })
    //1-FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.
    test("cost of Auto Clicker should increase by 10% each purchase", () => {
        const underTest = new DonutMaker(110, 1);
        underTest.addAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(2);
    }) 
    //1-FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.
    test("should not allow purchase of 3rd Auto Clicker due ctDonuts of 120 is 1 too low", () => {
        const underTest = new DonutMaker(120, 2);
        underTest.addAutoClicker();
        expect(underTest.ctDonuts).toEqual(120);
        expect(underTest.ctAutoClickers).toEqual(2);
    }) 

    test("should allow purchase of 3rd Auto Clicker due ctDonuts of 121 is just enough", () => {
        const underTest = new DonutMaker(121, 2);
        underTest.addAutoClicker();
        expect(underTest.ctDonuts).toEqual(0);
        expect(underTest.ctAutoClickers).toEqual(3);
    }) 
    //1-FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an 'Activate Auto Clickers' event is called.
    test("should add 3 to ctDonuts(100 --> 103) after 1 unit of time due to having ctAutoClickers = 3", () => {
        const underTest = new DonutMaker(100, 3);
        underTest.activateAutoClickers();
        expect(underTest.ctDonuts).toEqual(103);
    })
    

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