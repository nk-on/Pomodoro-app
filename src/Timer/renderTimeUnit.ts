export function renderTimeUnit(unit: number): string | number {
    return unit < 10 ? `:${unit}` : unit
}