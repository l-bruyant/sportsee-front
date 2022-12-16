/**
* Used to format the API user daily activity data and make it suitable for the app 
*
* @class
*
* @param activitiesData a Json File with user daily activity data, as received from the back-end
*
* @returns an object with formatted user daily activity data, useable by the app 
* 
*/

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
