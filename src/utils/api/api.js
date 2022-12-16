import DailyActivity from "../models/dailyActivity"
import DailySessionsLength from "../models/dailySessionsLength"
import PerfByCategory from "../models/perfByCategory"
import UserData from "../models/userData"

export async function getUserData (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}`)
    const data = await res.json()
    const testUserData = new UserData(data)
    console.log(testUserData)
    return testUserData
  } catch (error) {
    console.log(error)
  }
}

export async function getDailyActivity (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/activity`)
    const data = await res.json()
    const testDailyActivity = new DailyActivity(data)
    console.log(testDailyActivity)
    return testDailyActivity
  } catch (error) {
    console.log(error)
  }
}

export async function getDailySessionsLength (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/average-sessions`)
    const data = await res.json()
    const testDailySessionsLength = new DailySessionsLength(data)
    console.log(testDailySessionsLength)
    return testDailySessionsLength
  } catch (error) {
    console.log(error)
  }
}

export async function getPerfByCategory (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/performance`)
    const data = await res.json()
    const testPerfByCategory = new PerfByCategory(data)
    console.log(testPerfByCategory)
    return testPerfByCategory
  } catch (error) {
    console.log(error)
  }
}