import { useMutation } from "@tanstack/react-query";
import axios from 'axios';

const api = import.meta.env.VITE_BASE_URL;

export const useDeleteBook = ({ id }) => {

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: () => axios.delete(`${api}/delete-book/${id}`),
        options: {
            onSuccess: () => {
                console.log('Book deleted successfully');
            },
            onError: (error) => {
                console.error('Error deleting book:', error);
            },
        }
    });
    return { deleteBook: mutate, isDeletingBook: isLoading, isDeleteBookError: isError }
}

