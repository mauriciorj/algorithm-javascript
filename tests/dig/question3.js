import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const List = props => {

  const[list, setList] = React.useState(props.items)

  const clickChange = index => {
    console.log(index);
    let oldObj = [...list]
    let tempItem = oldObj[0]
    oldObj[0] = oldObj[index];
    oldObj[index] = tempItem;
    setList(oldObj)
  };

  return list.map((value, index) => (
    <ul key={index}>
      <li onClick={() => clickChange(index)}>{value}</li>
    </ul>
  ));
};

document.body.innerHTML = "<div id='root'> </div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[1];
if (listItem) {
  listItem.click();
}

setTimeout(() => console.log(document.getElementById("root").innerHTML));
