const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return{
        type: BUY_CAKE,
        info: "first redux action"
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialIceCreamState = {
    numOfIceCream: 20
}

const initialCakeState = {
    numOfCake: 10
}

const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state, 
                numOfCake: state.numOfCake - 1
            }
        default: 
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();