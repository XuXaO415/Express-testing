const rollDice = require("./dice");

describe("#rollDice", function() {
    Math.random = jest.fn(() => 0.5);

    test("it rolls the correct amount of dice", function() {
        expect(rollDice(6)).toEqual(3);
        expect(Math.random).toHaveBeenCalled();

        expect(rollDice(2)).toEqual(1);
        // console.log(Math.random.mock.calls);
        // Tells us that our mock function was called at least once
        expect(Math.random).toHaveBeenCalled();
        expect(rollDice(4)).toEqual(2);
        expect(Math.random).toBeCalled();
        expect(Math.random.mock.calls.length).toBe(3);


    });
});