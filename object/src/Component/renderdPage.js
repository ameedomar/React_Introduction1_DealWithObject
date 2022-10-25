import React from "react";
import object from "./Object";

var nameFlagArray = [];
var ageFlagArray = [];

class RenderdPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objectState: object,
    };
  }

  delteItem() {
    object.pop();
    let _objectState = JSON.parse(JSON.stringify(this.state.objectState));
    this.setState({
      objectState: _objectState,
    });
    nameFlagArray = [];
    ageFlagArray = [];
  }
  render() {
    return (
      <div>
        <div>
          {" "}
          <h3> Names :</h3>
          {object.map((item) => {
            if (nameFlagArray.includes(item.name)) return;
            nameFlagArray.push(item.name);
            return (
              <div>
                <div> {item.name}</div>
              </div>
            );
          })}
        </div>
        <div>
          {" "}
          <h3> Ages :</h3>
          {object.map((item) => {
            if (ageFlagArray.includes(item.age)) return;
            ageFlagArray.push(item.age);
            return (
              <div>
                <div> {item.age} </div>
              </div>
            );
          })}
        </div>

        <div>
          <button onClick={this.delteItem.bind(this)}> Delte Item </button>
        </div>
      </div>
    );
  }
}
export default RenderdPage;
