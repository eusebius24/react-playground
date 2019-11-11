import leapYear from "./index";
import { isTSAnyKeyword } from "@babel/types";

it('should NOT be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a leap year if divisible by 4 and not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
});

it('should NOT be a leap year if not divisible by 4', () => {
    expect(leapYear(1983)).toBe(false);
});

it('should throw an error if year is earlier than 1582', () => {
    expect(() => {
        leapYear(1568);
    }).toThrow();
});