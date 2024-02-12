import axios from "axios"
import {
  CONNECTOR_NEW_TB_USERNAME,
  CONNECTOR_NEW_TB_PASSWORD
} from "react-native-dotenv"
const newTb = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_NEW_TB_USERNAME,
    password: CONNECTOR_NEW_TB_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
