import React from 'react';
import { MessageComponent } from './message'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const ToogleComponent = ({ onToggle }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => { onToggle("item") }}>
        Toggle
      </Button>
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
        <Grid container spacing={24} justify="space-around" alignItems="center">
          <Grid item xs={10}>
            <h2>Motel Electify</h2>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              <div style={{ padding: 20 }}>
                <MessageComponent message={text} />
                <hr />
                <ToogleComponent onToggle={this.toggle.bind(this)} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
