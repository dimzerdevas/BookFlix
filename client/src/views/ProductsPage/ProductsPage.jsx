import { useFetchBooks } from "./hooks/useFetchBooks";
import { Book } from "./components/Book/Book";
import { BooksRow } from "./components/BooksRow";
import { BooksDropZone } from "./components/BookDropZone";

export const Products = () => {
  const {
    data: books,
    isError,
    isLoading: isFetchingBooks,
  } = useFetchBooks({
    onError: () => console.log("error pop"),
    onSuccess: () => console.log("success fetched books"),
  });

  if (isFetchingBooks) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching books</div>;
  }

  return (
    <div>
      <div>Books</div>
      <BooksDropZone>
        {/* {books.map(({ _id, title, author, genre }) => (
          <Book key={_id} title={title} author={author} genre={genre} />
        ))} */}
      </BooksDropZone>
      <BooksRow rowTitle="Continue reading...">
        {books.map(({ _id, title, author, genre }) => (
          <Book key={_id} title={title} author={author} genre={genre} />
        ))}
      </BooksRow>
      <BooksRow rowTitle="Read List">
        {books.map(({ _id, title, author, genre }) => (
          <Book key={_id} title={title} author={author} genre={genre} />
        ))}
      </BooksRow>
    </div>
  );
};
