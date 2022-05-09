import { useSelector, useDispatch } from "react-redux";
import { NewNoteInput } from "../NewNoteInput";
import { addNote } from "../redux/actions/actions";
import { NotesState } from "../redux/reducers/notesReducer";


function MyComponent() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default MyComponent;