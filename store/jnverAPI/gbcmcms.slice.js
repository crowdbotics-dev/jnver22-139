import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_gbcmcm_list = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_list",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_list(payload)
    return response.data
  }
)
export const api_v1_gbcmcm_create = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_create",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_create(payload)
    return response.data
  }
)
export const api_v1_gbcmcm_retrieve = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_retrieve",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_retrieve(payload)
    return response.data
  }
)
export const api_v1_gbcmcm_update = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_update",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_update(payload)
    return response.data
  }
)
export const api_v1_gbcmcm_partial_update = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_partial_update",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_partial_update(payload)
    return response.data
  }
)
export const api_v1_gbcmcm_destroy = createAsyncThunk(
  "gbcmcms/api_v1_gbcmcm_destroy",
  async payload => {
    const response = await apiService.api_v1_gbcmcm_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gbcmcmsSlice = createSlice({
  name: "gbcmcms",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_gbcmcm_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gbcmcm_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gbcmcm_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_gbcmcm_list,
  api_v1_gbcmcm_create,
  api_v1_gbcmcm_retrieve,
  api_v1_gbcmcm_update,
  api_v1_gbcmcm_partial_update,
  api_v1_gbcmcm_destroy,
  slice: gbcmcmsSlice
}
