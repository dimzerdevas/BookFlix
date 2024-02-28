import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

const api = import.meta.env.VITE_BASE_URL;

export const useDeleteBook = ({ id }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => axios.delete(`${api}/delete-book/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries("get-books");
      console.log("Book deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting book:", error);
    },
  });
  return {
    deleteBook: mutate,
    isDeletingBook: isLoading,
    isDeleteBookError: isError,
  };
};
