export default class DailySessionsLength {
  constructor (averageSessionsData) {
    this._avgSessions = averageSessionsData.data.sessions
  }

  get daysTable () {
    return ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  }

  get lineChartData () {
    return this._avgSessions.map((session) => {
      const dayNumber = session.day
      const dayLetter = this.daysTable[dayNumber - 1]
      return {
        day: dayLetter,
        length: session.sessionLength
      }
    })
  }
}
