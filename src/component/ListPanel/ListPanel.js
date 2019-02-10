import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import ListItem from "./ListItem";
import * as PropTypes from 'prop-types'

class ListPanel extends React.Component{

    render() {
        let items = [];
        for(let entity of this.props.entities){
            items.push(
                <ListItem title={entity.title} description={entity.description}/>
            )
        }
        return (
            <Paper>
                {items}
            </Paper>
        );
    }
}

ListPanel.propTypes = {
  entities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
   entities: state.questions.entities 
});

export default connect(mapStateToProps, null)(ListPanel);