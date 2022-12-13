export default class User {
  constructor (userData) {
    this._firstName = userData.data.userInfos.firstName
    this._calorieCount = userData.data.keyData.calorieCount
    this._proteinCount = userData.data.keyData.proteinCount
    this._carbohydrateCount = userData.data.keyData.carbohydrateCount
    this._lipidCount = userData.data.keyData.lipidCount
    this._score = userData.data.score
  }

  get firstName () {
    return this._firstName
  }

  get calories () {
    return this._calorieCount * 2
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

  get score () {
    return this._score
  }
}
