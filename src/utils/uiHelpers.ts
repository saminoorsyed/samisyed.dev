export function debounce<T extends (...args: any[]) => void>(func: T, delay = 300) {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
