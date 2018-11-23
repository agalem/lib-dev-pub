import React, { Component } from 'react';

import './SearchComponentMain.scss';

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const types = [
    'Akcja',
    'Fantasy',
    'Przygodowe',
    'Science Finction',
    'Naukowe',
    'Dla dzieci',
    'Dla dorosłych',
    'Biograficzne',
    'Bajki',
    'Opowiadania',
];


class SearchComponentMain extends Component {
    state = {
        name: [],
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <div className="SearchMain">
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Szukaj..."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className="filters">
                    <Typography component="h3" variant="button" gutterBottom>
                        Szukaj wśród
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    value="checkedA"
                                />
                            }
                            label="Autorów"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Tytułów"
                        />
                        <FormControl className="input-chip">
                            <InputLabel htmlFor="select-multiple-chip">Wybierz rodzaj</InputLabel>
                            <Select
                                multiple
                                value={this.state.name}
                                onChange={this.handleChange}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={selected => (
                                    <div >
                                        {selected.map(value => (
                                            <Chip key={value} label={value} className="chip"  />
                                        ))}
                                    </div>
                                )}
                            >
                                {types.map(name => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default SearchComponentMain;