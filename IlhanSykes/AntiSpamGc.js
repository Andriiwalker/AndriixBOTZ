// SYKES BOT | HANN SYKES
const usedCommandRecently = new Set();

const isFilteredz = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilterz = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 200); 
};
module.exports = {
    msgFilterz: {
        isFilteredz,
        addFilterz
    }};