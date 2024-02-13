import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ihjvbf_list = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_list",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_list(payload)
    return response.data
  }
)
export const api_v1_ihjvbf_create = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_create",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_create(payload)
    return response.data
  }
)
export const api_v1_ihjvbf_retrieve = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_retrieve",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_retrieve(payload)
    return response.data
  }
)
export const api_v1_ihjvbf_update = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_update",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_update(payload)
    return response.data
  }
)
export const api_v1_ihjvbf_partial_update = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_partial_update",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_partial_update(payload)
    return response.data
  }
)
export const api_v1_ihjvbf_destroy = createAsyncThunk(
  "ihjvbfs/api_v1_ihjvbf_destroy",
  async payload => {
    const response = await apiService.api_v1_ihjvbf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ihjvbfsSlice = createSlice({
  name: "ihjvbfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ihjvbf_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ihjvbf_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ihjvbf_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ihjvbf_list,
  api_v1_ihjvbf_create,
  api_v1_ihjvbf_retrieve,
  api_v1_ihjvbf_update,
  api_v1_ihjvbf_partial_update,
  api_v1_ihjvbf_destroy,
  slice: ihjvbfsSlice
}
