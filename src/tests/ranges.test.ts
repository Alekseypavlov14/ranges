import { Range, mapValueToRange } from '../ranges'

// Test for mapValueToRange function
test('mapValueToRange should map a single value to RangeValues with min and max equal to the value', () => {
  const value = 5;
  const rangeValues = mapValueToRange(value);
  expect(rangeValues).toEqual({ min: value, max: value });
});

// Tests for Range class
const range = new Range({ min: 1, max: 10 });

// Test for getValues method
test('getValues should return the correct range values', () => {
  expect(range.getValues()).toEqual({ min: 1, max: 10 });
});

// Test for within method
test('within should constrain values within the range', () => {
  expect(range.within(0)).toBe(1);
  expect(range.within(5)).toBe(5);
  expect(range.within(15)).toBe(10);
});

// Test for isGreaterThanMinAndLessThanMax method
test('isGreaterThanMinAndLessThanMax should check if value is within (min, max)', () => {
  expect(range.isGreaterThanMinAndLessThanMax(0)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMax(1)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMax(5)).toBe(true);
  expect(range.isGreaterThanMinAndLessThanMax(10)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMax(11)).toBe(false);
});

// Test for isGreaterThanMinOrEqualAndLessThanMax method
test('isGreaterThanMinOrEqualAndLessThanMax should check if value is within [min, max)', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(0)).toBe(false);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(1)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(5)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(10)).toBe(false);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(11)).toBe(false);
});

// Test for isGreaterThanMinAndLessThanMaxOrEqual method
test('isGreaterThanMinAndLessThanMaxOrEqual should check if value is within (min, max]', () => {
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(0)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(1)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(5)).toBe(true);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(10)).toBe(true);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(11)).toBe(false);
});

// Test for isGreaterThanMinOrEqualAndLessThanMaxOrEqual method
test('isGreaterThanMinOrEqualAndLessThanMaxOrEqual should check if value is within [min, max]', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(0)).toBe(false);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(1)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(5)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(10)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(11)).toBe(false);
});

// Test for getIntersection method
test('getIntersection should return the correct intersection range or null', () => {
  const intersectionRange1 = range.getIntersection({ min: 5, max: 15 });
  expect(intersectionRange1?.getValues()).toEqual({ min: 5, max: 10 });

  const intersectionRange2 = range.getIntersection({ min: -5, max: 5 });
  expect(intersectionRange2?.getValues()).toEqual({ min: 1, max: 5 });

  const intersectionRange3 = range.getIntersection({ min: 15, max: 20 });
  expect(intersectionRange3).toBeNull();
});

// Test for isInRangeOf method
test('isInRangeOf should check if current range is within another range', () => {
  expect(range.isInRangeOf({ min: 0, max: 20 })).toBe(true);
  expect(range.isInRangeOf({ min: 1, max: 10 })).toBe(true);
  expect(range.isInRangeOf({ min: 5, max: 15 })).toBe(false);
  expect(range.isInRangeOf({ min: 0, max: 5 })).toBe(false);
});

// Test for containsRange method
test('containsRange should check if current range contains another range', () => {
  expect(range.containsRange({ min: 2, max: 8 })).toBe(true);
  expect(range.containsRange({ min: 1, max: 10 })).toBe(true);
  expect(range.containsRange({ min: 0, max: 5 })).toBe(false);
  expect(range.containsRange({ min: 5, max: 15 })).toBe(false);
});
