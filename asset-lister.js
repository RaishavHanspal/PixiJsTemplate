const fs = require("fs");
const path = require("path");

/**
 * Find all files inside a dir, recursively.
 * @param  {string} dir Dir path string.
 * @return {string[]} Array with all file names that are inside the directory.
 */
function getAllFiles(dir) {
    return fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
    }, [])
};

const assets = getAllFiles("./assets");
fs.writeFileSync("./src/assets.json", JSON.stringify(assets, null, 4));