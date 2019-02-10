import React, {Component} from 'react';
import CSV_Reader from "./component/CSC_Reader/CSV_Reader";
import ListPanel from "./component/ListPanel/ListPanel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CSV_Reader/>
                <ListPanel/>
            </div>
        );
    }
}

export default App;
