import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const sampleOptions = [
  {id: "753", title: "This is the first option"},
  {id: "035", title: "This is the secnd option"}
]

class OptionsShower extends React.Component{
  constructor(props){
    super(props);
    //const { options } = props;
    this.state = { displayOptions: false};

    this.displayOptions = this.displayOptions.bind(this)
  }

  displayOptions(){
    this.setState(state => ({
      displayOptions: !state.displayOptions
    }));
  }

  render(){
    var options = null;
    if(this.state.displayOptions){
      options = (
        <ul id="options">
          {this.props.options.map(option => (
            <li key={option.id}>{option.title}</li>
          ))}
        </ul>
      );
    }

    return(
      <div>
        <button onClick={this.displayOptions}>
          {this.state.displayOptions ? "Hide options" : "Show Options"}
        </button>
          {options}
      </div>
    )
  }
}

document.body.innerHTML = "<div id='root'> </div>";
const rootElement = document.getElementById('root');
ReactDOM.render(<OptionsShower options={sampleOptions} />, rootElement);