export const groupByKey = (list, key) => list
  .reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {});

export const humanize = (str) => str.trim().split(/\s+/).map((s) => s.replace(/_/g, ' ').replace(/\s+/, ' ').trim()).join(' ')
  .toLowerCase()
  .replace(/^./, (m) => m.toUpperCase());

const recursiveToCamel = (item) => {
  if (Array.isArray(item)) {
    return item.map((el) => recursiveToCamel(el));
  } if (typeof item === 'function' || item !== Object(item)) {
    return item;
  }
  return Object.fromEntries(
    Object.entries(item).map(([key, value]) => [
      key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, '')),
      recursiveToCamel(value),
    ]),
  );
};
export function prepareData(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.map((item) => recursiveToCamel(item));
}

export function prepareV2Data(a) {
  if (!Array.isArray(a)) {
    return a;
  }
  let arr = [];
  a.forEach((item) => {
    const activities = item.activities.map((activity) => ({
      ...activity,
      resource_type: item.resource_type,
    }));
    arr = [...arr, ...activities];
  });
  arr = prepareData(arr);
  return arr;
}
