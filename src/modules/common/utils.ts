export function getCSSVariable(name: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function isTouchDevice() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
}