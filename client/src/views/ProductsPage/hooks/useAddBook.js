import { useMutation } from "@tanstack/react-query";

export const useAddBook = () => {

    return useMutation(
        async (postData) => {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            return response.json();
        },
    );
};

