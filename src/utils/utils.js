export const groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})

export const humanize = (str) => {
  return str.trim().split(/\s+/).map(function(str) {
    return str.replace(/_/g, ' ').replace(/\s+/, ' ').trim();
  }).join(' ').toLowerCase().replace(/^./, function(m) {
    return m.toUpperCase();
  });
}


export function prepareV2Data(data) {
  let arr = []
  data.map(item => {
    const activities = item.activities.map(activity => ({
      ...activity,
      resource_type: item.resource_type
    }))
    arr = [...arr, ...activities]
  })
  return arr
}
