import axios from "axios"
const jnverAPI = axios.create({
  baseURL: "https://jnver22-139.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return jnverAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_gbcmcm_list(payload) {
  return jnverAPI.get(`/api/v1/gbcmcm/`)
}
function api_v1_gbcmcm_create(payload) {
  return jnverAPI.post(`/api/v1/gbcmcm/`, payload)
}
function api_v1_gbcmcm_retrieve(payload) {
  return jnverAPI.get(`/api/v1/gbcmcm/${payload.id}/`)
}
function api_v1_gbcmcm_update(payload) {
  return jnverAPI.put(`/api/v1/gbcmcm/${payload.id}/`, payload)
}
function api_v1_gbcmcm_partial_update(payload) {
  return jnverAPI.patch(`/api/v1/gbcmcm/${payload.id}/`, payload)
}
function api_v1_gbcmcm_destroy(payload) {
  return jnverAPI.delete(`/api/v1/gbcmcm/${payload.id}/`)
}
function api_v1_ihjvbf_list(payload) {
  return jnverAPI.get(`/api/v1/ihjvbf/`)
}
function api_v1_ihjvbf_create(payload) {
  return jnverAPI.post(`/api/v1/ihjvbf/`, payload)
}
function api_v1_ihjvbf_retrieve(payload) {
  return jnverAPI.get(`/api/v1/ihjvbf/${payload.id}/`)
}
function api_v1_ihjvbf_update(payload) {
  return jnverAPI.put(`/api/v1/ihjvbf/${payload.id}/`, payload)
}
function api_v1_ihjvbf_partial_update(payload) {
  return jnverAPI.patch(`/api/v1/ihjvbf/${payload.id}/`, payload)
}
function api_v1_ihjvbf_destroy(payload) {
  return jnverAPI.delete(`/api/v1/ihjvbf/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return jnverAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return jnverAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return jnverAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return jnverAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return jnverAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return jnverAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return jnverAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return jnverAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return jnverAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return jnverAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return jnverAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return jnverAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return jnverAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_gbcmcm_list,
  api_v1_gbcmcm_create,
  api_v1_gbcmcm_retrieve,
  api_v1_gbcmcm_update,
  api_v1_gbcmcm_partial_update,
  api_v1_gbcmcm_destroy,
  api_v1_ihjvbf_list,
  api_v1_ihjvbf_create,
  api_v1_ihjvbf_retrieve,
  api_v1_ihjvbf_update,
  api_v1_ihjvbf_partial_update,
  api_v1_ihjvbf_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
