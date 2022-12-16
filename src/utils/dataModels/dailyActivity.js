export default class DailyActivity {
  constructor (activitiesData) {
    this._sessions = activitiesData.data.sessions
  }

  get barChartData () {
    return this._sessions.map((session) => {
      return {
        kil: session.kilogram,
        cal: session.calories,
        day: parseInt(session.day.slice(-2))
      }
    })
  }
}
