import mockedUserJSON from '../data/mocks/mock_user.json'
import mockedUserActivityJSON from '../data/mocks/mock_useractivity.json'
import mockedUserAverageSessionsJSON from '../data/mocks/mock_useraveragesessions.json'
import mockedUserPerformanceJSON from '../data/mocks/mock_userperformance.json'

import User from './models/User'
import Activities from './models/Activities.js'
import AverageSessions from './models/Sessions.js'
import Performances from './models/Performances.js'

export const mockedUser = mockedUserJSON
export const mockedUserActivity = mockedUserActivityJSON
export const mockedUserAverageSessions = mockedUserAverageSessionsJSON
export const mockedUserPerformance = mockedUserPerformanceJSON

export const currentUser = new User(mockedUser)
export const currentActivitiesList = new Activities(mockedUserActivity)
export const currentAverageActivities = new AverageSessions(mockedUserAverageSessions)
export const currentPerformance = new Performances(mockedUserPerformance)
