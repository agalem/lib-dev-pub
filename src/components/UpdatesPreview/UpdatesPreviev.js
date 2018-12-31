import React, {Component} from 'react';
import './UpdatesPreview.scss';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class UpdatesPreviev extends Component {
    render() {
        return (
          <div className="updates_container">
              <Typography gutterBottom variant="h5" component="h2" className="section__title">Aktualności</Typography>
              <div className="width__container">
                  <div className="grid-container" >
                      <div className="grid-item" >
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zapisz się do newslettera
                              </Typography>
                              <Typography component="p">
                                  Nie przegap nowości i wydarzeń
                              </Typography>
                              <a className="link-bottom" href="/" >Czytaj więcej...</a>
                          </Paper>
                      </div>
                      <div className="grid-item" >
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zaplanuj wizytę
                              </Typography>
                              <Typography component="p">
                                  Odwiedź nowy budynek biblioteki
                              </Typography>
                              <a className="link-bottom" href="/" >Czytaj więcej...</a>
                          </Paper>
                      </div>
                      <div className="grid-item" >
                          <Paper elevation={1} className="paper-custom">
                              <Typography variant="h5" component="h3">
                                  Zmiana godzin pracy
                              </Typography>
                              <span className="shortText">
                                  <Typography component="p">
                                      W okresie wakacyjnym obowiązują nowe godziny pracy biblioteki
                                  </Typography>
                              </span>
                              <a className="link-bottom" href="/" >Czytaj więcej...</a>
                          </Paper>
                      </div>
                  </div>
                  <div className="btn-container">
                      <Button variant="outlined" color="secondary">
                          Pokaż więcej
                      </Button>
                  </div>
              </div>
          </div>
        );
    }
}

export default UpdatesPreviev;