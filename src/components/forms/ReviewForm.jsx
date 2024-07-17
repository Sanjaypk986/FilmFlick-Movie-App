import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOneReview } from "../../features/reviews/reviewSlice";

export default function ReviewForm({ movieId }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const payLoad = {
      ...data,
      movie: movieId
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/reviews`, payLoad, { withCredentials: true });
      dispatch(addOneReview(response.data));
      reset();
    } catch (error) {
      console.error('Error submitting review:', error.message);
      alert("Failed to submit review. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center p-4 rounded-md shadow-md w-full lg:w-3/4 mx-auto">
      <div className="w-full">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 my-2">Title</label>
        <input
          placeholder="Title"
          {...register("title", { required: true })}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
        />
        {errors.title && <span className="text-red-500 text-sm">This field is required</span>}
      </div>
      
      <div className="w-full">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 my-2">Description</label>
        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
        />
        {errors.description && <span className="text-red-500 text-sm">This field is required</span>}
      </div>
      
      <div className="w-full mx-auto mt-4 sm:mt-0">
        <input
          type="submit"
          value="Submit"
          className="w-full sm:w-auto px-4 py-2 border bg-gray-600 text-white hover:bg-gray-700 rounded-md hover:bg-blue-600 transition duration-300"
        />
      </div>
    </form>
  );
}
