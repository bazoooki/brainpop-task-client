export const groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})

export function humanize(str) {
  return str.trim().split(/\s+/).map(function(str) {
    return str.replace(/_/g, ' ').replace(/\s+/, ' ').trim();
  }).join(' ').toLowerCase().replace(/^./, function(m) {
    return m.toUpperCase();
  });
}
