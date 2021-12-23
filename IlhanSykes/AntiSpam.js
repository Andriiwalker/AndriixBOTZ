// SYKES BOT | HANN SYKES
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 650); 
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};