import axios from 'axios'
import {ServerResponse} from '../../../_module'
import {UserProfileModel} from '../../auth'
import {API_URL} from '../../../_requests'

export const USER_PATH = "user"

export const USER_PROFILE_URL = `${API_URL}/${USER_PATH}/profile`

export function getUserProfile(userId: number) {
  return axios.get<ServerResponse<UserProfileModel>>(USER_PROFILE_URL, {params: {userId: userId}})
}