import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import {API_URL} from '../../../_requests'
import {ServerResponse} from '../../../_module'

export const AUTH_PATH = "authentication"
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/${AUTH_PATH}/verify`
export const LOGIN_URL = `${API_URL}/${AUTH_PATH}/authenticate`
export const REGISTER_URL = `${API_URL}/${AUTH_PATH}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/${AUTH_PATH}/forgot_password`

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post<ServerResponse<AuthModel>>(LOGIN_URL, {
    username,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<ServerResponse<UserModel>>(GET_USER_BY_ACCESSTOKEN_URL, {
    token: token,
  })
}
