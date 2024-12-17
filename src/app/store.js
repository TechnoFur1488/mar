import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../routes/ProductKat/productSlice"

export default configureStore({
    reducer: {
        product: productSlice
    }
})