import { combineReducers, createStore } from "redux";

const initialState = {
  pagination: {
    page: 1,
  },
  modal: {
    isModalVisible: false,
    modalData: {},
  },
};

const paginationReducer = (state = {}, action) => {
  switch (action.type) {
    case "PAGE_PREV":
      return { ...state, page: state.page - 1 };

    case "PAGE_NEXT":
      console.log("PAGE_NEXT");
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      console.log("SET_MODAL_VISIBLE");
      console.log(state);
      return { ...state, isModalVisible: true };
    case "SET_MODAL_INVISIBLE":
      return { ...state, isModalVisible: false };
    case "SET_MODAL_DATA":
      return { ...state, modalData: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pagination: paginationReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
