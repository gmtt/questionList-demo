import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import FilterChip from "./FilterChip";
import FilterAdd from "./FilterAdd";
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";
import {removeCategory, removeFilter} from "./action";

function FilterPanel(props) {
    return (
        <Paper>
            <Typography>Filter Panel</Typography>
            {props.filters.map(f=>{
                return(
                    <FilterChip
                        label={f}
                        onDelete={()=>props.removeFilter(f)}
                        key={f}
                    />
                )
            })}
            {props.category.map(n=>{
                return(
                    <FilterChip
                        key={n}
                        label={n}
                        onDelete={()=>props.removeCategory(n)}
                    />
                )
            })}
            <FilterAdd/>
        </Paper>
    )
}

FilterPanel.propTypes = ({
    filters: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
    removeFilter: PropTypes.func,
    removeCategory: PropTypes.func
});

const mapStateToProps = state => ({
    filters: state.questions.filters,
    category: state.questions.category
});

const mapDispatchToProps = dispatch => ({
    removeFilter: n=>dispatch(removeFilter(n)),
    removeCategory: n=>dispatch(removeCategory(n))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);