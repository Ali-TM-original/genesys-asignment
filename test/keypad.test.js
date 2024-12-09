// import { Combo } from '../src/keypad.js';
const { Combo } = require("../index");


describe('Combo Function', () => {
    it('should return [] for an empty input', () => {
        expect(Combo("")).toEqual([]);
    });

    it('should return ["a", "b", "c"] for input "2"', () => {
        expect(Combo("2")).toEqual(["a", "b", "c"]);
    });

    it('should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] for input "23"', () => {
        expect(Combo("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    });

    it('should return [] for input "1"', () => {
        expect(Combo("1")).toEqual([]);
    });
});