import React from 'react';
import {Icon, IconButton} from "@material-ui/core";
import FilterDialog from "./FilterDialog";

class FilterAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            dialogOpen: true
        })
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false
        })
    };

    render() {
        return (
            <span>
                <IconButton
                    onClick={this.handleClick}
                >
                    <Icon color='primary'>add_circle</Icon>
                </IconButton>
                <FilterDialog
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                />
            </span>
        )
    }
}

export default FilterAdd;

