export interface RangeValues {
  min: number
  max: number
}

export class Range {
  constructor(private readonly rangeValues: RangeValues) {}

  getValues() {
    return this.rangeValues
  }

  // Returns value constrained within the range
  within(value: number): number {
    if (value > this.rangeValues.max) return this.rangeValues.max
    if (value < this.rangeValues.min) return this.rangeValues.min
    return value
  }

  // Checks if value is within the range (min, max)
  isGreaterThanMinAndLessThanMax(value: number): boolean {
    return value > this.rangeValues.min && value < this.rangeValues.max
  }

  // Checks if value is within the range [min, max)
  isGreaterThanMinOrEqualAndLessThanMax(value: number): boolean {
    return value >= this.rangeValues.min && value < this.rangeValues.max
  }

  // Checks if value is within the range (min, max]
  isGreaterThanMinAndLessThanMaxOrEqual(value: number): boolean {
    return value > this.rangeValues.min && value <= this.rangeValues.max
  }

  // Checks if value is within the range [min, max]
  isGreaterThanMinOrEqualAndLessThanMaxOrEqual(value: number): boolean {
    return value >= this.rangeValues.min && value <= this.rangeValues.max
  }

  // Returns the intersection of two ranges if exists, otherwise null
  getIntersection(rangeValues: RangeValues): Range | null {
    const greaterMin = Math.max(this.rangeValues.min, rangeValues.min)
    const lowerMax = Math.min(this.rangeValues.max, rangeValues.max)

    if (greaterMin > lowerMax) return null

    return new Range({ min: greaterMin, max: lowerMax })
  }

  isInRangeOf(rangeValues: RangeValues): boolean {
    return this.rangeValues.min >= rangeValues.min && this.rangeValues.max <= rangeValues.max
  }

  containsRange(rangeValues: RangeValues): boolean {
    return this.rangeValues.min <= rangeValues.min && this.rangeValues.max >= rangeValues.max
  }

  containsValue(value: number): boolean {
    return this.rangeValues.min <= value && this.rangeValues.max >= value
  }
}

export function mapValueToRange(value: number): RangeValues {
  return ({ min: value, max: value })
}
