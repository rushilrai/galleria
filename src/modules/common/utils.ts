export function getCSSVariable(name: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}