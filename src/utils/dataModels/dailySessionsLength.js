/**
* Used to format the API user average sessions per day data and make it suitable for the app 
*
* @class
*
* @param averageSessionsData a Json File with user average sessions per day data, as received from the back-end
*
* @returns an object with formatted average sessions per day data, useable by the app 
* 
*/

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
