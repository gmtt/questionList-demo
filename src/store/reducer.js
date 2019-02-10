import {combineReducers} from "redux";

const STATUS = ['open', 'closed', 'voided', 'resolved'];

const questions = (state = {
    entities: [],
    filters: [],
    category: [],
    sortByTime: 0,
    groupByCategory: false
}, action) => {
    switch (action.type) {
        case 'add_questions':
            return {
                ...state,
                entities: action.entities
            };
        case 'add_filter':
            let newFilters = [...state.filters];
            if (STATUS.includes(action.name)){
                newFilters = state.filters.filter(n=>!STATUS.includes(n))
            }
            return {
                ...state,
                filters: [...newFilters,action.name]
            };
        case 'add_category':
            return {
                ...state,
                category: [...state.category,action.name]
            };
        case 'remove_filter':
            return {
                ...state,
                filters: state.filters.filter(f => f !== action.name)
            };
        case 'remove_category':
            return {
                ...state,
                category: state.category.filter(c => c !== action.name)
            };
        case 'toggle_sort':
            return {
                ...state,
                sortByTime: state.sortByTime===1?-1:state.sortByTime+1
            };
        case 'toggle_group':
            return {
                ...state,
                groupByCategory: !state.groupByCategory
            }
        default:
            return state;
    }
};

export default combineReducers({
    questions
})