import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import ListItem from "./ListItem";
import * as PropTypes from 'prop-types'

class ListPanel extends React.Component {

    checkFilter = (entity) => {
        for (let filter of this.props.filters) {
            switch (filter) {
                case 'open':
                    if (Date.now() < Date.parse(entity.start_date) || Date.now() >= Date.parse(entity.end_date)) {
                        return false;
                    }
                    break;
                case 'closed':
                    if (Date.now() < Date.parse(entity.end_date)) return false;
                    break;
                case 'voided':{
                    if (entity.is_voided === 'False') {
                        return false;
                    }
                    break;}
                case 'resolved':
                    if (entity.is_resolved === 'False') return false;
                    break;
                default:
                    break;
            }
        }
        return true;
    };

    checkCategory = (entity) => {
        for (let c of this.props.category) {
            if (entity.categories === c)
                return true
        }
    };

    render() {
        let items = [];
        let {filters, category} = this.props;
        for (let entity of this.props.entities) {
            if (filters.length > 0 && !this.checkFilter(entity))  continue;
            if (category.length > 0 && !this.checkCategory(entity)) continue;
            items.push(
                <ListItem title={entity.title} description={entity.description} key={entity.title}/>
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
    entities: PropTypes.array.isRequired,
    filters: PropTypes.array,
    category: PropTypes.array
};

const mapStateToProps = state => ({
    entities: state.questions.entities,
    filters: state.questions.filters,
    category: state.questions.category
});

export default connect(mapStateToProps, null)(ListPanel);