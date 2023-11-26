import { createStore } from "https://cdn.skypack.dev/redux";

const initState =
  { value: "", showSearch: false ,SearchResult: ""};

const counterReducer = (state = initState, action) => {
  if (action.type === "setSearchTerm") {

    return { ...state, value: action.payload };
  }

  if (action.type === "isEmpty") {
    if(state.value ===""){
      return { ...state, showSearch: false };
    }
    else{
      return { ...state, showSearch: true };
    }
   
  }
  return state;
};

const store = createStore(counterReducer);
export default store;