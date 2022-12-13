export default class AverageSessions {
  constructor (averageSessionsData) {
    this._avgSessions = averageSessionsData.data.sessions
  }

  get daysTable () {
    return ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  }

  get lengthsTable () {
    return this._avgSessions.map((session) => {
      return session.sessionLength
    })
  }
}
