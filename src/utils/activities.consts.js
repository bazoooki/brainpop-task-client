const CHALLENGE = 'challenge'
const MAKE_A_MAP = 'make_a_map'
const DRAW_ABOUT_IT = 'draw_about_it'
const EASY_QUIZ = 'easy_quiz'
const MAKE_A_MOVIE = 'make_a_movie'
const MOVIE = 'movie'
const QUIZ = 'quiz'
const RELATED_READING = 'related_reading'
const WORD_PLAY = 'word_play'

const ALL_WORK = 'all_work'

export {
  ALL_WORK,
  CHALLENGE,
  MAKE_A_MAP,
  DRAW_ABOUT_IT,
  EASY_QUIZ,
  MAKE_A_MOVIE,
  MOVIE,
  QUIZ,
  RELATED_READING,
  WORD_PLAY,
  activityTypesSettings
}


const activityTypesSettings = {
  'challenge': {score: true,  zoom :true},
  'make_a_map': {score: false, zoom: true},
  'draw_about_it': {score: false, zoom: true},
  'easy_quiz': {score: true, zoom: true},
  'make_a_movie': {score: false, zoom: true},
  'movie': {score: false, zoom: false},
  'quiz': {score: true, zoom: true},
  'related_reading': {score: false, zoom: false},
  'word_play': {score: false, zoom: true},
}
