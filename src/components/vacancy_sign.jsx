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
  render() {
    var text;
    if (this.props.hasvacancy) {
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
