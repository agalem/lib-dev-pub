import React, {Component} from 'react';
import './UpdatesPreview.scss';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class UpdatesPreviev extends Component {
    render() {
        return (
          <div className="updates_container">
              <Typography gutterBottom variant="h5" component="h2" className="section__title">Aktualności</Typography>
              <div className="width__container">
                  <Grid container spacing={24}>
                      <Grid item xs={8} sm={4}>
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zapisz się do newslettera
                              </Typography>
                              <Typography component="p">
                                  Nie przegap nowości i wydarzeń
                              </Typography>
                          </Paper>
                      </Grid>
                      <Grid item sm={4}>
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zaplanuj wizytę
                              </Typography>
                              <Typography component="p">
                                  Odwiedź nowy budynek biblioteki
                              </Typography>
                          </Paper>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zmiana godzin pracy
                              </Typography>
                              <Typography component="p">
                                  W okresie wakacyjnym obowiązują nowe godziny pracy biblioteki
                              </Typography>
                          </Paper>
                      </Grid>
                  </Grid>
                  <Grid item xs={12} className='center'>
                      <Button className="space-top" variant="outlined" color="secondary">
                          Pokaż więcej
                      </Button>
                  </Grid>
              </div>
          </div>
        );
    }
}

export default UpdatesPreviev;