export const amountFormatter = (amount) => {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(0) + 'm';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + 'k';
    } else {
        return amount.toString();
    }
}