import * as React from "react";
import Dragula from "react-dragula";
import Card from "./Card";
import "./Swimlane.css";

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    });
    return (
      <div className="Swimlane-column" ref={this.dragulaDecorator}>
        <div className="Swimlane-title">{this.props.name}</div>
        <div
          className="Swimlane-dragColumn"
          id={`${this.props.divClass}`}
          ref={this.props.dragulaRef}
        >
          {cards}
        </div>
      </div>
    );
  }

  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      Dragula(
        [].slice.apply(
          document.querySelectorAll(".Swimlane-dragColumn"),
          options
        )
      ).on("drop", function(el, target) {
        console.log(target.id);
        el.className = `${target.id} Card`;
      });
    }
  };
}
