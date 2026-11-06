if (typeof Object.groupBy !== "function") {
  Object.groupBy = function groupBy(items, callback) {
    if (items == null) {
      throw new TypeError("Object.groupBy called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError("callback must be a function");
    }

    const result = Object.create(null);
    let index = 0;

    for (const item of items) {
      const key = callback(item, index);
      index += 1;

      if (!Object.prototype.hasOwnProperty.call(result, key)) {
        result[key] = [];
      }

      result[key].push(item);
    }

    return result;
  };
}
