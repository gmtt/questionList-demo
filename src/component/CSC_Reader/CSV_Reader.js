import React from 'react';
import CSVReader from "react-csv-reader";
import * as PropTypes from "prop-types";
import {addQuestions} from "./action";
import {connect} from "react-redux";

function CSV_Reader(props) {
   return(
       <div>
          <CSVReader
              onFileLoaded={(data)=>props.addQuestions(data)}
          />
       </div>
   )
}

CSV_Reader.propTypes = {
    addQuestions: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   addQuestions: (data)=>dispatch(addQuestions(data))
});

export default connect(null, mapDispatchToProps)(CSV_Reader);