import { useFetchBooks } from "./hooks/useFetchBooks";
import { Book, BooksRow } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export const Products = () => {
  const {
    data: books,
    isError,
    isLoading: isFetchingBooks,
  } = useFetchBooks({
    onError: () => console.log("error pop"),
    onSuccess: () => console.log("success fetched books"),
  });

  const notify = () => toast("Wow so easy !");

  useEffect(() => {
    if (isFetchingBooks) {
      toast("Fetching books");
    }
  }, [isFetchingBooks]);

  if (isError) {
    return <div>Error fetching books</div>;
  }

  return (
    <div>
      <div>Books</div>
      <button onClick={notify}>Notify me</button>
      <BooksRow rowTitle="Continue reading...">
        {books?.map(({ _id, title, author, genre }) => (
          <Book
            key={_id}
            id={_id}
            title={title}
            author={author}
            genre={genre}
          />
        ))}
      </BooksRow>
      <BooksRow rowTitle="Read List">
        {books?.map(({ _id, title, author, genre }) => (
          <Book
            key={_id}
            id={_id}
            title={title}
            author={author}
            genre={genre}
          />
        ))}
      </BooksRow>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};
