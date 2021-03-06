import React from 'react';
import { MessageComponent } from './message'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from './app_bar'
import ClippedDrawer from './menu'

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
        <ButtonAppBar />
        <ClippedDrawer />
        <Grid container spacing={24} justify="space-around" alignItems="center"
        style={{ marginLeft: 200 }}>
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
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
        </Grid>
      </div>
    );
  }
}
