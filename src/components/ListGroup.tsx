import { MouseEvent } from "react";
function ListGroup() {
  let items = [
    "Houston",
    "San Antonio",
    "Austin",
    "Dallas",
    "Fort Worth",
    "Katy"
  ];
  //items = [];

  //Event Handler;
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p> }
      <ul className="list-group">
        {items.map((item) => (
          <li 
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
          ))}
      </ul>
    </>
  );
}

export default ListGroup;
