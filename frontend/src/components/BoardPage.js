import Board from "./Board";
import { useParams } from "react-router-dom";
import * as PropTypes from "prop-types";

BoardPage.propTypes = {
  todos: PropTypes.array.isRequired,
  onAdvance: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function BoardPage({ todos, onAdvance, onDelete }) {
  const { statusSlug } = useParams();

  const slugToStatus = {
    open: "OPEN",
    "in-progress": "IN_PROGRESS",
    done: "DONE",
  };

  const filteredTodos = todos.filter(
    (todo) => todo.status === slugToStatus[statusSlug]
  );

  const statusToTitle = {
    open: "Open",
    "in-progress": "In Progress",
    done: "Done",
  };

  const title = statusToTitle[statusSlug];

  return (
    <Board
      todos={filteredTodos}
      onAdvance={onAdvance}
      onDelete={onDelete}
      title={title}
    />
  );
}
