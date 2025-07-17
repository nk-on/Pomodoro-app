export function renderTimeUnit(unit: number): string | number {
    return unit < 10 ? `0${unit}` : unit
}