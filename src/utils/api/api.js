import DailyActivity from "../dataModels/dailyActivity"
import DailySessionsLength from "../dataModels/dailySessionsLength"
import PerfByCategory from "../dataModels/perfByCategory"
import UserData from "../dataModels/userData"

export async function getUserData (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}`)
    const data = await res.json()
    const formattedData = new UserData(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getDailyActivity (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/activity`)
    const data = await res.json()
    const formattedData = new DailyActivity(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getDailySessionsLength (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/average-sessions`)
    const data = await res.json()
    const formattedData = new DailySessionsLength(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getPerfByCategory (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/performance`)
    const data = await res.json()
    const formattedData = new PerfByCategory(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}