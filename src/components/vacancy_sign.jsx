import React from 'react';
import { MessageComponent } from './message'

class Square extends React.Component {
  render() {
    return (
      <button onClick={() => console.log('click')}>
        {this.props.children}
      </button>
    );
  }
}

export class VacancySign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVacant: this.props.hasvacancy,
    };
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
        <Square>Add Visitor</Square>
      </div>
    );
  }
}
