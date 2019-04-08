import React from 'react';

var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    );
  }
});

var VacancySign = React.createClass({
  render: function() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <MessageComponent message={text}/>;
  }
});

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <VacancySign hasvacancy={false} />
    </div>);
  }
}
