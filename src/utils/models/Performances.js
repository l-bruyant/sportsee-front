export default class Performances {
  constructor (performancesData) {
    this._kinds = performancesData.data.kind
    this._dataPerKind = performancesData.data.data
  }

  get kindsTable () {
    return this._kinds
  }

  get performancesTable () {
    return this._dataPerKind.map((activitiy) => {
      return activitiy.value
    })
  }
}
