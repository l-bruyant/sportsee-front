import mockedUserJSON from '../data/mocks/mock_user.json'
import mockedUserActivityJSON from '../data/mocks/mock_useractivity.json'
import mockedUserAverageSessionsJSON from '../data/mocks/mock_useraveragesessions.json'
import mockedUserPerformanceJSON from '../data/mocks/mock_userperformance.json'

import User from './models/User'
import Activities from './utils/models/Activities.js'
import AverageSessions from './utils/models/Sessions.js'
import Performances from './utils/models/Performances.js'

export const mockedUser = mockedUserJSON
export const mockedUserActivity = mockedUserActivityJSON
export const mockedUserAverageSessions = mockedUserAverageSessionsJSON
export const mockedUserPerformance = mockedUserPerformanceJSON

export const currentUser = new User(mockedUser)
export const testActivitiesList = new Activities(mockedUserActivity)
export const testAverageActivities = new AverageSessions(mockedUserAverageSessions)
export const testPerformance = new Performances(mockedUserPerformance)
