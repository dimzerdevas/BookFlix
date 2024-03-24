import { BookPreview } from "./style";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../constants/ItemTypes";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteBook } from "../../hooks/useDeleteBook";

export const Book = ({ id, title, author, genre }) => {
  const { deleteBook, isDeletingBookError, isDeletingBook } =
    useDeleteBook({ id });

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.BOOK,
      collect: (monitor) => ({
        opacity: !!monitor.isDragging(),
      }),
    }),
    []
  );

  if (isDeletingBookError) {
    return <div>Error while deleting</div>;
  }

  if (isDeletingBook) {
    return <div>Loading...</div>;
  }

  return (
    <BookPreview
      variant="outlined"
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <Card>
        <CardMedia component="img" height="140" />
        <CardContent>
          <p>{title}</p>
          <p>{author}</p>
          <p>{genre}</p>
          <IconButton onClick={deleteBook}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </BookPreview>
  );
};
