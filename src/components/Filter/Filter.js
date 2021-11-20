import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = (event) => dispatch(filterContact(event.target.value));

  return (
    <label>
      <input type="text" name="filter" onChange={onFilter} />
    </label>
  );
};

export default Filter;
