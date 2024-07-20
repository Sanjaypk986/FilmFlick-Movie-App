import { createSlice } from "@reduxjs/toolkit";
import ReviewForm from "../../components/forms/ReviewForm";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews = [...action.payload];
    },
    addOneReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
    updateReview: (state, action) => {
      const { _id, updatedReview } = action.payload;
      state.reviews = state.reviews.map((review) =>
        review._id === _id ? { ...review, ...updatedReview } : review
      );
    }
  },
});

// Action creators are generated for each case reducer function
export const { addReview, addOneReview, deleteReview, updateReview } = reviewSlice.actions;

export default reviewSlice.reducer;
