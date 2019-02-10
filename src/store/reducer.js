import {combineReducers} from "redux";

const questions = (state={
    entities: []
},action) => {
   switch (action.type) {
       case 'add_questions':
           return {
               ...state,
               entities: action.entities
           };
       default:
           return state;
   }
};

export default combineReducers({
    questions
})