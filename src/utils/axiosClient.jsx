import axios from "axios";

const api = axios.create({
  baseURL: "https://lrazzxpwhdtmxcetgtng.supabase.co/rest/v1",
  headers: {
    apikey: "sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB",
    Authorization: "Bearer sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB",
    "Content-Type": "application/json"
  }
});

export default api;
