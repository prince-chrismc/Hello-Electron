import React from 'react';
import { VacancySign } from './components/vacancy_sign'

export default class App extends React.Component {
  render() {
    return (
    <div>
      <h2>Welcome to React!</h2>
      <VacancySign hasvacancy={false} />
    </div>);
  }
}
