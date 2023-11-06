export const GOAL_TYPE = {
  STANDUP: { type: 'STANDUP', text: 'Standup' },
  LONG_TERM: { type: 'LONG_TERM', text: 'Long Term' },
  SHORT_TERM: { type: 'SHORT_TERM', text: 'Short Term' }
}

export const GOAL_STATUS = {
  COMPLETED: { type: "completed", text: "Completed", color: 'surface-variant' },
  ONGOING: { type: "ongoing", text: "Ongoing", color: 'success' },
  PAUSED: { type: "paused", text: "Paused", color: 'warning' },
};

export const DEFAULT_GOAL = {
  title: '',
  type: GOAL_TYPE.SHORT_TERM.type,
  status: GOAL_STATUS.ONGOING.type,
  assignees: []
}

export const ERROR_MESSAGE = {
  GOAL_ID_NOT_FOUND: 'Goal id not found'
}
