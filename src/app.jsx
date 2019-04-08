import React from 'react';
import { VacancySign } from './components/vacancy_sign'

export default class App extends React.Component {
  render() {
    return <VacancySign hasvacancy={false} />;
  }
}
