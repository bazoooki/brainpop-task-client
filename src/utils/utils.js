export const groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})

export const humanize = (str) => {
  return str.trim().split(/\s+/).map(function(str) {
    return str.replace(/_/g, ' ').replace(/\s+/, ' ').trim();
  }).join(' ').toLowerCase().replace(/^./, function(m) {
    return m.toUpperCase();
  });
}


export const isActivityZoom = (activity) => activityTypeSettings.find(item=>item.type === activity).zoom
export const isActivityScore = (activity) => activityTypeSettings.find(item=>item.type === activity).score

const activityTypeSettings = [
  {type: 'challenge', score:true , zoom: true},
  {type: 'make_a_map',score: false, zoom: true},
  {type: 'draw_about_it',score: false, zoom: true},
  {type: 'easy_quiz',score: true, zoom: true},
  {type: 'make_a_movie',score: false, zoom: true},
  {type: 'movie',score: false, zoom: false},
  {type: 'quiz',score: true, zoom: true},
  {type: 'related_reading',score: false, zoom: false},
  {type: 'word_play',score: false, zoom: true},
]
