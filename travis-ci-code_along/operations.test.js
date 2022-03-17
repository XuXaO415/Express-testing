const { add, subtract, multiply, average } = require("./operations");

describe("#add", function() {
    it("adds numbers", function() {
        expect(add(7, 4)).toEqual(11);
    });
    it("handles empty inputs", function() {
        expect(add()).toEqual(0);
    });
});

describe("#subtract", function() {
    it("subtracts numbers", function() {
        expect(subtract(2, 1)).toEqual(1);
    });
    it("handles empty inputs", function() {
        expect(subtract()).toEqual(0);
    });
});
//Added this comment

describe("#multiply", function() {
    it("multiplies numbers", function() {
        expect(multiply(9, 9)).toEqual(81);
    });
});

describe("#average", function() {
    it("calculates the average", function() {
        expect(average(2, 2)).toEqual(2);
        expect(average(2, -2)).toEqual(0);
    });
    it("handles empty inputs", function() {
        expect(average()).toEqual(0);
    });
});