import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './CatalogFilters.scss';

class CatalogFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearFrom: 0,
            yearTo: 0,
            authors: [],
            languages: [],
            countries: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        if(name === 'yearFrom' || name === 'yearTo') {
            this.setState ({
                [name]: event.target.value,
            });
        } else {
            //authors, languages
            //const authors = this.state.authors;
            const list = this.state[name];
            let index;
            if(event.target.checked) {
                list.push(event.target.value);
            } else {
                index = list.indexOf(event.target.value);
                list.splice(index, 1);
            }
            this.setState({[name]: list});
            console.log(list);
        }
    };

    render() {
        return (
            <div>
                <ExpansionPanel className="no-shadow">
                    <ExpansionPanelSummary className="expansionPanel_summary" expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="button">
                            Rok Powstania
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <div>
                                <TextField
                                    className="textField"
                                    label={"Od"}
                                    value={this.state.yearFrom}
                                    onChange={this.handleChange('yearFrom')}
                                />
                                <TextField
                                    className="textField"
                                    label={"Do"}
                                    value={this.state.yearTo}
                                    onChange={this.handleChange('yearTo')}
                                />
                            </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel className="no-shadow">
                    <ExpansionPanelSummary className="expansionPanel_summary" expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="button">
                            Autor
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <div className="selection-list-column">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={'author1'}
                                            color={'primary'}
                                            onChange={this.handleChange('authors')}
                                        />
                                    }
                                    label={'Author name'}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={'author2'}
                                            color={'primary'}
                                            onChange={this.handleChange('authors')}
                                        />
                                    }
                                    label={'Author name'}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={'author3'}
                                            color={'primary'}
                                            onChange={this.handleChange('authors')}
                                        />
                                    }
                                    label={'Author name'}
                                />
                            </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel className="no-shadow">
                    <ExpansionPanelSummary className="expansionPanel_summary" expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="button">
                            Język
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="selection-list-column">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={'polish'}
                                        color={'primary'}
                                        onChange={this.handleChange('languages')}
                                    />
                                }
                                label={'Polski'}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={'english'}
                                        color={'primary'}
                                        onChange={this.handleChange('languages')}
                                    />
                                }
                                label={'Angielski'}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={'french'}
                                        color={'primary'}
                                        onChange={this.handleChange('languages')}
                                    />
                                }
                                label={'Francuski'}
                            />
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default CatalogFilters;