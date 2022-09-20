import { createContext } from 'react';



const initialState = {
    page: 1,
    
}


const reducer = (state,action) => {
    switch (action.type) {
        case 'PAGE_PREV': 
        return { ...state, page: state.page - 1 }
        case 'PAGE_NEXT': 
        return { ...state, page: state.page + 1 }
        default: 
        return state
    }
};

const GeneralContext = createContext([reducer, initialState]);

export default GeneralContext;