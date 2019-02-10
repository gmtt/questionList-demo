import * as React from "react";
import {Dialog, ListItem, ListItemText} from "@material-ui/core";
import * as PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Check from "@material-ui/icons/Check";
import {connect} from "react-redux";
import {addCategory, addFilter, removeCategory, removeFilter} from "./action";

class FilterDialog extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <div>
                    <List component='nav'>
                        <ListItem>
                            <ListItemText primary='Status'/>
                        </ListItem>
                        {['open', 'closed', 'voided', 'resolved'].map(n => {
                            if (this.props.filters.includes(n)) {
                                return (
                                    <ListItem button onClick={()=>this.props.removeFilter(n)} key={n}>
                                        <ListItemIcon><Check/></ListItemIcon>
                                        <ListItemText primary={n} inset/>
                                    </ListItem>
                                );
                            } else {
                                return (
                                    <ListItem button onClick={()=>this.props.addFilter(n)} key={n}>
                                        <ListItemText primary={n} inset/>
                                    </ListItem>
                                )
                            }
                        })}
                        <ListItem>
                            <ListItemText primary='Category'/>
                        </ListItem>
                        {['Other', 'Politics/Intl Relations', 'Macroeconomics/Finance', 'Natural Sciences/Climate', 'Health/Disease', 'Technology'].map(n=>{
                            if (this.props.category.includes(n)) {
                                return (
                                    <ListItem button onClick={()=>this.props.removeCategory(n)} key={n}>
                                        <ListItemIcon><Check/></ListItemIcon>
                                        <ListItemText primary={n} inset/>
                                    </ListItem>
                                );
                            } else {
                                return (
                                    <ListItem button onClick={()=>this.props.addCategory(n)} key={n}>
                                        <ListItemText primary={n} inset/>
                                    </ListItem>
                                )
                            }
                        })}
                    </List>
                </div>
            </Dialog>
        );
    }

}

FilterDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    filters: state.questions.filters,
    category: state.questions.category
});

const mapDispatchToProps = dispatch => ({
    addFilter: e=>dispatch(addFilter(e)),
    addCategory: e=>dispatch(addCategory(e)),
    removeFilter: e=>dispatch(removeFilter(e)),
    removeCategory: e=>dispatch(removeCategory(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDialog);