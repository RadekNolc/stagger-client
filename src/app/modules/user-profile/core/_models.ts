// API: UserProfileResponse
import {DateAsArray} from './UserNotifications'

export interface UserProfileModel {
  roles: Array<string>
  coins: number
  maxCoins: number
  //successRate: number
  universityCount: number
}

// API: NotificationResponse
export interface NotificationModel {
  id: number
  category: string
  title: NotificationCategory
  description: string
  icon: string
  state: NotificationState
  isRead: boolean
  sentDateTime: DateAsArray
}

enum NotificationCategory {
  ALERT,
  UPDATE,
  LOG
}

enum NotificationState {
  PRIMARY,
  DANGER,
  WARNING,
  SUCCESS,
  INFO,
}

export interface ReadNotificationModel {
  read: boolean
}
