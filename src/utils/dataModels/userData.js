export default class UserData {
  constructor (userData) {
    this._firstName = userData.data.userInfos.firstName
    this._calorieCount = userData.data.keyData.calorieCount
    this._proteinCount = userData.data.keyData.proteinCount
    this._carbohydrateCount = userData.data.keyData.carbohydrateCount
    this._lipidCount = userData.data.keyData.lipidCount
    if (userData.data.todayScore == null) {
      this._score = userData.data.score
    } else {
      this._score = userData.data.todayScore
    }
  }

  get firstName () {
    return this._firstName
  }

  get calories () {
    return this._calorieCount
  }

  get proteins () {
    return this._proteinCount
  }

  get carbs () {
    return this._carbohydrateCount
  }

  get lipids () {
    return this._lipidCount
  }

  get scoreDisplay () {
    return this._score * 100
  }

  get radialBarChartData () {
    return {
      name: 'score',
      score: this._score * 100,
      fill: 'red'
    }
  }
}
