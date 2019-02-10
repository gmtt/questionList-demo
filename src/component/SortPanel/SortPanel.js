import React from 'react'
import {FormControlLabel, Paper, Switch, Typography} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {toggleGroup, toggleSort} from "./action";
import Remove from '@material-ui/icons/Remove';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

function SortPanel(props) {
    let icon;
    let text;
    switch (props.sortByTime) {
        case -1:
            icon = <ArrowDownward/>;
            text = 'Latest'
            break;
        case 1:
            icon = <ArrowUpward/>;
            text = 'Oldest'
            break;
        default:
            icon = <Remove/>;
            text = 'sort by time'
            break;

    }
    return (
        <Paper>
            <Typography>Sort Panel</Typography>
            <Fab variant={"extended"} color='secondary' size='medium'
                onClick={props.toggleSort}
            >
                {icon}
                {text}
            </Fab>
            <FormControlLabel control={
                <Switch
                    checked={props.groupByCategory}
                    onChange={props.toggleGroup}
                    value={'groupByCategory'}
                    color='secondary'
                />
            } label='Group By Category'/>
        </Paper>
    )
}

SortPanel.propTypes = {
    sortByTime: PropTypes.number.isRequired,
    groupByCategory: PropTypes.bool.isRequired,
    toggleSort: PropTypes.func.isRequired,
    toggleGroup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    sortByTime: state.questions.sortByTime,
    groupByCategory: state.questions.groupByCategory
});

const mapDispatchToProps = dispatch => ({
    toggleSort: ()=>dispatch(toggleSort),
    toggleGroup: ()=>dispatch(toggleGroup)
});

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);