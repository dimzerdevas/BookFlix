import { useFetchBooks } from "./hooks/useFetchBooks";
import { Book, BooksRow } from "./components";

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

      <BooksRow rowTitle="Continue reading...">
        {books.map(({ _id, title, author, genre }) => (
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
        {books.map(({ _id, title, author, genre }) => (
          <Book
            key={_id}
            id={_id}
            title={title}
            author={author}
            genre={genre}
          />
        ))}
      </BooksRow>
    </div>
  );
};
