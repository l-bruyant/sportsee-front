/**
* Used to format the API user performance by category data and make it suitable for the app 
*
* @class PerfByCategory
*
* @param performancesData a Json File with user performance by category data, as received from the back-end
*
* @returns an object with formatted user performance by category data, useable by the app 
* 
*/

export default class PerfByCategory {
  constructor (performancesData) {
    this._kinds = performancesData.data.kind
    this._dataPerKind = performancesData.data.data
  }

  get kindsTable () {
    return this._kinds
  }

  get radarChartData () {
    return this._dataPerKind.map((activitiy) => {
      const activityId = activitiy.kind
      const activityName = this.kindsTable[activityId]
      const activitiyNameCap = activityName.charAt(0).toUpperCase() + activityName.slice(1)
      return {
        activity: activitiyNameCap,
        score:activitiy.value
      }
    })
  }
}
