import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import ListItem from "./ListItem";
import * as PropTypes from 'prop-types'

class ListPanel extends React.Component {

    checkFilter = (entity) => {
        for (let filter of this.props.filters) {
            switch (filter) {
                case 'open':
                    if (Date.now() < entity.start_date || Date.now() >= entity.end_date) {
                        return false;
                    }
                    break;
                case 'closed':
                    if (Date.now() < entity.end_date) return false;
                    break;
                case 'voided': {
                    if (entity.is_voided === 'False') {
                        return false;
                    }
                    break;
                }
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

    sortByTime = (items, flag) => {
        if (flag === 1) {
            items.sort((a, b) => a.start_date - b.start_date);
        } else if (flag === -1) {
            items.sort((a, b) => b.start_date - a.start_date);
        }
    };

    render() {
        let entities = [...this.props.entities];
        if (this.props.groupByCategory) {
            if (this.props.sortByTime !== 0) {
                 entities.sort((a, b) => {
                    if (a.categories < b.categories) return -1;
                    else if (a.categories > b.categories) return 1;
                    else return this.props.sortByTime*(a.start_date-b.start_date);
                })
            } else {
                entities.sort((a, b) => {
                    if (a.categories < b.categories) return -1;
                    else if (a.categories > b.categories) return 1;
                    else return 0;
                })
            }
        } else if (this.props.sortByTime !== 0) {
            this.sortByTime(entities, this.props.sortByTime);
        }
        let items = [];
        let {filters, category} = this.props;
        let preCategory = '';
        for (let entity of entities) {
            if (filters.length > 0 && !this.checkFilter(entity)) continue;
            if (category.length > 0 && !this.checkCategory(entity)) continue;
            if (this.props.groupByCategory && entity.categories !== preCategory) {
                preCategory = entity.categories;
                items.push(<Typography variant='h4' key={preCategory}>{preCategory}</Typography>)
            }
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
    category: PropTypes.array,
    sortByTime: PropTypes.number,
    groupByCategory: PropTypes.bool
};

const mapStateToProps = state => ({
    entities: state.questions.entities,
    filters: state.questions.filters,
    category: state.questions.category,
    sortByTime: state.questions.sortByTime,
    groupByCategory: state.questions.groupByCategory
});

export default connect(mapStateToProps, null)(ListPanel);