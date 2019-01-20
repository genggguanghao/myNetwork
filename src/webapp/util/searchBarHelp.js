const me={
    //帮助函数
    //去重
    distinct(target) {
        const tempArr = [];
        target.forEach(item => {
            if (!tempArr.includes(item)) {
                tempArr.push(item);
            }
        });
        return tempArr;
    },
    //数据扁平化帮助函数
    normalize(identify, data) {
        const id2Value = {};
        data.forEach(item => {
            const idValue = me.getObjectIdValue(identify, item);
            id2Value[idValue] = item;
        });
        return id2Value;
    },
    //
    getObjectIdValue(identify, target) {
        let id = "";
        if (me.isArray(identify)) {
            id = me.findObjectValueByPath(target, identify);
        } else {
            id = target[identify];
        }
        return id;
    },
    findObjectValueByPath(target, paths) {
        let value = target;
        paths.forEach(path => {
            value = value[path];
        });
        return value;
    },

    isArray(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    },
    isObject(o) {
        return Object.prototype.toString.call(o) === "[object Object]";
    },
    isEmptyObject(o) {
        return !Object.keys(o).length;
    }
}

export default me;