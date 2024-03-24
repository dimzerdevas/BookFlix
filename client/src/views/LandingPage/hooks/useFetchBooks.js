import { useQuery } from "@tanstack/react-query";
const api = import.meta.env.VITE_BASE_URL;

export const useFetchBooks = ({
    onError,
    onSuccess,
}) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["get-books"],
        queryFn: async () => {
            const response = await fetch(`${api}/books`);

            if (!response.ok) {
                throw new Error("Failed to fetch books");
            }

            return response.json();
        },
        options: {
            onError,
            onSuccess
        }
    });

    return { data, isError, isLoading }
}