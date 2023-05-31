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


const activityTypesSettings = {
  [CHALLENGE]: {score: true,  zoom :true},
  [MAKE_A_MAP]: {score: false, zoom: true},
  [DRAW_ABOUT_IT]: {score: false, zoom: true},
  [EASY_QUIZ]: {score: true, zoom: true},
  [MAKE_A_MOVIE]: {score: false, zoom: true},
  [MOVIE]: {score: false, zoom: false},
  [QUIZ]: {score: true, zoom: true},
  [RELATED_READING]: {score: false, zoom: false},
  [WORD_PLAY]: {score: false, zoom: true},
}

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
