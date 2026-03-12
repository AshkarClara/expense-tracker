export function numbersOnly(e, min, max) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > max) {
        value = value.slice(0, max);
    }
    e.target.value = value;
}