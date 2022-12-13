export default class Activities {
  constructor (activitiesData) {
    this._sessions = activitiesData.data.sessions
  }

  get sessions () {
    return this._sessions
  }

  get kilogramsTable () {
    return this._sessions.map((session) => {
      return session.kilogram
    })
  }

  get caloriesTable () {
    return this._sessions.map((session) => {
      return session.calories
    })
  }

  get datesDigitsTable () {
    return this._sessions.map((session) => {
      return parseInt(session.day.slice(-2))
    })
  }

  get activityGraphTable () {
    return this._sessions.map((session) => {
      return {
        kil: session.kilogram,
        cal: session.calories,
        day: parseInt(session.day.slice(-2))
      }
    })
  }
}
