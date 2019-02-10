import * as PropTypes from "prop-types";
import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

function ListItem(props) {
    return(
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {props.title}
                </Typography>
                <Typography component='p'>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ListItem;