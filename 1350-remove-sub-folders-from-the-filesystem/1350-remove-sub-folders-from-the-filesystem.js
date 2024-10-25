/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function(folder) {
    folder.sort();
    
    const res = [folder[0]];
    
    for (let i = 1; i < folder.length; i++) {
        const lastFolder = res[res.length - 1] + '/';
        
        if (!folder[i].startsWith(lastFolder)) {
            res.push(folder[i]);
        }
    }
    
    return res;
};