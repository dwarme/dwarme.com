export function debounce(fn: Function, wait: number): Function {
    let t: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait)
    }
}
