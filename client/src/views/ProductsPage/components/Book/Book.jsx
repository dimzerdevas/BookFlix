import { BookPreview } from "./style";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../constants/ItemTypes";
import image from "../../../../assets/images/TheGreatGatsby.jpg";
import { Card, CardContent, CardMedia } from "@mui/material";

export const Book = ({ title, author, genre }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.BOOK,
      collect: (monitor) => ({
        opacity: !!monitor.isDragging(),
      }),
    }),
    []
  );

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
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <p>{title}</p>
          <p>{author}</p>
          <p>{genre}</p>
        </CardContent>
      </Card>
    </BookPreview>
  );
};
