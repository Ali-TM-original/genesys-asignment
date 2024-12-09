// Main Module Right here
const phoneKeypad = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

const Combo = (digits) => {
    // If no digits provided or length > 4
    let res = [""];
    if (!digits || digits.length > 4 || digits.length === 0) {
        return [];
    }

    // O(4^n) or O(3^n) depending on the digit pressed
    for (let digit of digits) {
        const translation = phoneKeypad[digit];
        if (!translation) {
            // In case a digit like '1' or '9
            return [];
        }

        // Temporary array to store the new combinations
        let temp = [];
        for (let combination of res) {
            for (let letter of translation) {
                temp.push(combination + letter);
            }
        }
        res = temp;
    }

    // Insertion sort
    // O(n^2)
    for (let i = 1; i < res.length; i++) {
        let key = res[i];
        let j = i - 1;

        // Move elements of res[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && res[j] > key) {
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = key;
    }

    return res;
};

module.exports = { Combo };