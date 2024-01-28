import { Row, Arrow } from "./style";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const BooksRow = ({ rowTitle, children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h2>{rowTitle}</h2>
      <Row>
        <Arrow left={0} />
        {children}
        <Arrow right={0} />
      </Row>
    </DndProvider>
  );
};
