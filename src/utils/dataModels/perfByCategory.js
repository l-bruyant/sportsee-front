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