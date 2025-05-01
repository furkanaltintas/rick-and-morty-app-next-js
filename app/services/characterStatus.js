export const characterStatus = (status) => {
    switch (status) {
        case "Alive":
            return '🟢';
        case "unknown":
            return '⚫';
        case "Dead":
            return '🔴';
        default:
            return '⚫';
    }
}