import mockedUser from './mock_user.json'
import mockedUserActivity from './mock_useractivity.json'
import mockedUserAverageSessions from './mock_useraveragesessions.json'
import mockedUserPerformance from './mock_userperformance.json'

import UserData from '../dataModels/userData'
import DailyActivity from '../dataModels/dailyActivity.js'
import DailySessionsLength from '../dataModels/dailySessionsLength.js'
import PerfByCategory from '../dataModels/perfByCategory.js'

export const mockedUserEasyExport = mockedUser

export const currentUser = new UserData(mockedUser)
export const currentDailyActivity = new DailyActivity(mockedUserActivity)
export const currentDailySessionsLength = new DailySessionsLength(mockedUserAverageSessions)
export const currentPerfByCategory = new PerfByCategory(mockedUserPerformance)

export const userFirstName = currentUser.firstName
export const userScore = currentUser.radialBarChartData.score
export const userCalories = currentUser.calories
export const userProteins = currentUser.proteins
export const userCarbs = currentUser.carbs
export const userLipids = currentUser.lipids

export const dailyActivityData = currentDailyActivity.barChartData
export const dailySessionLengthData = currentDailySessionsLength.lineChartData
export const perfByCatData = currentPerfByCategory.radarChartData
export const userScoreData = currentUser.radialBarChartData
