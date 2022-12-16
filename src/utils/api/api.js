import DailyActivity from "../dataModels/dailyActivity"
import DailySessionsLength from "../dataModels/dailySessionsLength"
import PerfByCategory from "../dataModels/perfByCategory"
import UserData from "../dataModels/userData"

import mockedUser from '../dataMocks/mock_user.json'
import mockedUserActivity from '../dataMocks/mock_useractivity.json'
import mockedUserAverageSessions from '../dataMocks/mock_useraveragesessions.json'
import mockedUserPerformance from '../dataMocks/mock_userperformance.json'

let useMockData = false

export async function getUserData (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}`)
    const data = await res.json()
    const formattedData = useMockData ? new UserData(mockedUser) : new UserData(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getDailyActivity (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/activity`)
    const data = await res.json()
    const formattedData = useMockData ? new DailyActivity(mockedUserActivity) : new DailyActivity(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getDailySessionsLength (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/average-sessions`)
    const data = await res.json()
    const formattedData = useMockData ? new DailySessionsLength(mockedUserAverageSessions) : new DailySessionsLength(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}

export async function getPerfByCategory (id) {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}/performance`)
    const data = await res.json()
    const formattedData = useMockData ? new PerfByCategory(mockedUserPerformance) : new PerfByCategory(data)
    return formattedData
  } catch (error) {
    console.log(error)
  }
}