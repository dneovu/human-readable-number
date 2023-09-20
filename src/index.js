module.exports = function toReadable(number) {
    const base = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve'
    ];

    const complex = {
        2: 'twen',
        3: 'thir',
        5: 'fif',
        8: 'eigh'
    };

    function twoDigits(number) {
        const firstDig = parseInt(number / 10);

        if (number <= 12) return base[number];
        if (number <= 19) {
            const suffix = complex[number % 10] || base[number % 10];
            return suffix + 'teen';
        }

        let prefix = complex[firstDig] || base[firstDig];
        const suffix = (number % 10 !== 0) ? ` ${base[number % 10]}` : '';
        if (firstDig === 4) prefix = 'for'
        return prefix + 'ty' + suffix;
    }

    const firstDig = parseInt(number / 100);
    if (number % 100 === 0 && number !== 0) return `${base[firstDig]} hundred`;
    return number > 100 ? `${base[firstDig]} hundred ${twoDigits(number - firstDig * 100)}` : twoDigits(number);
}