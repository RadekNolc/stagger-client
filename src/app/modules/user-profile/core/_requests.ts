import axios from 'axios'
import {ServerResponse} from '../../../_module'
import {API_URL} from '../../../_requests'
import {NotificationModel, ReadNotificationModel, UserProfileModel} from './_models'

export const USER_PATH = "user"
export const NOTIFICATION_PATH = "notification"

export const USER_PROFILE_URL = `${API_URL}/${USER_PATH}/profile`

export const USER_NOTIFICATIONS_URL = `${API_URL}/${NOTIFICATION_PATH}/user`
export const USER_READ_NOTIFICATION_URL = `${API_URL}/${NOTIFICATION_PATH}/read`

export function getUserProfile(userId: number) {
  return axios.get<ServerResponse<UserProfileModel>>(USER_PROFILE_URL, {params: {userId: userId}})
}

export function getUserNotifications(userId: number) {
  return axios.get<ServerResponse<Array<NotificationModel>>>(USER_NOTIFICATIONS_URL, {params: {userId: userId}})
}

export function readUserNotification(notificationId: number) {
  return axios.post<ServerResponse<ReadNotificationModel>>(USER_READ_NOTIFICATION_URL, {
    notificationId: notificationId
  })
}