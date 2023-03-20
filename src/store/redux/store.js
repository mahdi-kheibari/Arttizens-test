import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './chart/chartSlice';
export default configureStore({
    reducer: {
        chart: chartReducer,
    },
})