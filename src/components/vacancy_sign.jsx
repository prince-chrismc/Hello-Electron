import React from 'react';
import { MessageComponent } from './message'

export class VacancySign extends React.Component{
  render() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <MessageComponent message={text}/>;
  }
}
