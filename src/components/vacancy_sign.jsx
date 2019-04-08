import React from 'react';
import { MessageComponent } from './message'

const ToogleComponent = ({onToggle}) => {
  return (
    <div>
      <button onClick={() => {onToggle("item")}}>Toggle</button>
    </div>
  );
 }

export class VacancySign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVacant: this.props.hasvacancy,
    };
  }

  toggle() {
    this.setState((prevState) => (
        this.state, 
        { isVacant: !prevState.isVacant }
    ));
  }

  render() {
    var text;
    if (this.state.isVacant) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return (
      <div>
        <MessageComponent message={text} />
        <hr/>
        <ToogleComponent onToggle={this.toggle.bind(this)} />
      </div>
    );
  }
}
