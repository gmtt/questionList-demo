import React from 'react';
import * as PropTypes from "prop-types";
import {Chip} from "@material-ui/core";

function FilterChip(props) {
   return(
       <Chip
           label={props.label}
           color='primary'
           onDelete={props.onDelete}
       />
   )
}

FilterChip.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};

export default FilterChip;