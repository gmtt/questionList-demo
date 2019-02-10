import React, {Component} from 'react';
import CSV_Reader from "./component/CSC_Reader/CSV_Reader";
import ListPanel from "./component/ListPanel/ListPanel";
import FilterPanel from "./component/FilterPanel/FilterPanel";
import SortPanel from "./component/SortPanel/SortPanel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CSV_Reader/>
                <FilterPanel/>
                <SortPanel/>
                <ListPanel/>
            </div>
        );
    }
}

export default App;
