import { createSlice } from '@reduxjs/toolkit'

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        topPriceInfo: [],
        bottomPriceInfo: [],
    },
    reducers: {
        addTopInfo(state, action) {
            state.topPriceInfo = [...state.topPriceInfo, action.payload.info]
        },
        addBottomInfo(state, action) {
            state.bottomPriceInfo = [...state.bottomPriceInfo, action.payload.info]
        },
        removeAllInfo(state) {
            state.bottomPriceInfo = []
            state.topPriceInfo = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTopInfo, addBottomInfo, removeAllInfo } = chartSlice.actions

export default chartSlice.reducer