# Range Utility Library

A utility library for handling and manipulating numerical ranges in JavaScript/TypeScript.

## Installation

Install the package via npm:

```bash
npm install @oleksii-pavlov/ranges
```

## Usage

Import the `Range` class in your code:

```typescript
import { Range } from '@oleksii-pavlov/ranges';
```

## API Reference

### Range Class

#### Constructor

```typescript
constructor(rangeValues: RangeValues)
```

Initializes a `Range` instance with the specified `rangeValues`.

#### Methods

##### `getValues()`

```typescript
getValues(): RangeValues
```

Returns the `RangeValues` object containing the `min` and `max` values of the range.

##### `within(value: number)`

```typescript
within(value: number): number
```

Constrains a given value within the range. If the value is less than the range's `min`, it returns `min`. If the value is greater than the range's `max`, it returns `max`. Otherwise, it returns the value itself.

##### `isGreaterThanMinAndLessThanMax(value: number)`

```typescript
isGreaterThanMinAndLessThanMax(value: number): boolean
```

Checks if the value is within the range `(min, max)` (exclusive).

##### `isGreaterThanMinOrEqualAndLessThanMax(value: number)`

```typescript
isGreaterThanMinOrEqualAndLessThanMax(value: number): boolean
```

Checks if the value is within the range `[min, max)` (inclusive of `min` and exclusive of `max`).

##### `isGreaterThanMinAndLessThanMaxOrEqual(value: number)`

```typescript
isGreaterThanMinAndLessThanMaxOrEqual(value: number): boolean
```

Checks if the value is within the range `(min, max]` (exclusive of `min` and inclusive of `max`).

##### `isGreaterThanMinOrEqualAndLessThanMaxOrEqual(value: number)`

```typescript
isGreaterThanMinOrEqualAndLessThanMaxOrEqual(value: number): boolean
```

Checks if the value is within the range `[min, max]` (inclusive).

##### `getIntersection(rangeValues: RangeValues)`

```typescript
getIntersection(rangeValues: RangeValues): Range | null
```

Returns the intersection of the current range with another range defined by `rangeValues`. If there is no intersection, it returns `null`.

##### `isInRangeOf(rangeValues: RangeValues)`

```typescript
isInRangeOf(rangeValues: RangeValues): boolean
```

Checks if the current range is entirely within another range defined by `rangeValues`.

##### `containsRange(rangeValues: RangeValues)`

```typescript
containsRange(rangeValues: RangeValues): boolean
```

Checks if the current range entirely contains another range defined by `rangeValues`.

### mapValueToRange Function

```typescript
export function mapValueToRange(value: number): RangeValues
```

Maps a single value to a `RangeValues` object where both `min` and `max` are equal to the given value.

### RangeValues Interface

```typescript
export interface RangeValues {
  min: number;
  max: number;
}
```

Represents a range with a minimum (`min`) and a maximum (`max`) value.

## Examples

### Constraining a Value Within a Range

```typescript
const range = new Range({ min: 1, max: 10 });
console.log(range.within(0)); // Output: 1
console.log(range.within(5)); // Output: 5
console.log(range.within(15)); // Output: 10
```

### Checking if a Value is Within a Specific Range

```typescript
const range = new Range({ min: 1, max: 10 });
console.log(range.isGreaterThanMinAndLessThanMax(5)); // Output: true
console.log(range.isGreaterThanMinOrEqualAndLessThanMax(1)); // Output: true
console.log(range.isGreaterThanMinAndLessThanMaxOrEqual(10)); // Output: true
console.log(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(5)); // Output: true
```

### Finding the Intersection of Two Ranges

```typescript
const range1 = new Range({ min: 1, max: 10 });
const range2 = new Range({ min: 5, max: 15 });
const intersection = range1.getIntersection(range2.getValues());
console.log(intersection?.getValues()); // Output: { min: 5, max: 10 }
```

### Checking if a Range is Within Another Range

```typescript
const range1 = new Range({ min: 1, max: 10 });
const range2 = new Range({ min: 0, max: 20 });
console.log(range1.isInRangeOf(range2.getValues())); // Output: true
```

### Checking if a Range Contains Another Range

```typescript
const range1 = new Range({ min: 1, max: 10 });
const range2 = new Range({ min: 2, max: 8 });
console.log(range1.containsRange(range2.getValues())); // Output: true
```

### Checking if a Range Contains Value

```typescript
const range = new Range({ min: 1, max: 10 });
console.log(range.containsValue(3)); // Output: true
```

### Mapping a Single Value to a Range

```typescript
const rangeValues = mapValueToRange(5);
console.log(rangeValues); // Output: { min: 5, max: 5 }
```
