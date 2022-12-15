import mockedUser from '../data/mocks/mock_user.json'
import mockedUserActivity from '../data/mocks/mock_useractivity.json'
import mockedUserAverageSessions from '../data/mocks/mock_useraveragesessions.json'
import mockedUserPerformance from '../data/mocks/mock_userperformance.json'

import UserData from './models/userData'
import DailyActivity from './models/dailyActivity.js'
import DailySessionsLength from './models/dailySessionsLength.js'
import PerfByCategory from './models/perfByCategory.js'

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
