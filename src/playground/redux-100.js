import { createStore } from 'redux';

const countReducer =((state= {count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ?
			action.incrementBy : 1
		 return {
		 	count: state.count + incrementBy
		 }
		case 'DECREMENT':
		 return {
		 	count: state.count - action.decrementBy
		 }
		 case 'RESET':
		 return {
		 	count: 0
		 }
		 case 'SET':
		 return {
		 	count: action.count
		 }

		 default:
		  return state;
	}
})
const store = createStore(countReducer);
store.subscribe(() => {
	console.log(store.getState());
})

// Actions -> an object that gets sent to the store

// Action creator - function that return action objects
/*
const incrementCount = (payload = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
	}
}*/
const incrementCount = ({ incrementBy = 1 } = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy
	}
}
/*const decrementCount = (payload = {}) => {
	return {
		type: 'DECREMENT',
		decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
	}
}*/
const decrementCount = ({ decrementBy = 1 } = {}) => {
	return {
		type: 'DECREMENT',
		decrementBy
	}
}

/*const setCount = (payload ) => {
	return {
		type: 'SET',
		count: payload.count
	}
}*/
const setCount = ({ count }) => {
	return {
		type: 'SET',
		count: 0
	}
}

const resetCount = () => {
	return {
		type: 'RESET',
	}
}

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

/*store.dispatch({
	type: 'RESET'
});
*/
store.dispatch(decrementCount()); 

store.dispatch(decrementCount({ decrementBy: 10}));
/*store.dispatch({
	type: 'DECREMENT'
});

store.dispatch({
	type: 'DECREMENT',
	decrementBy: 10
});*/
store.dispatch(setCount({count: 150}))
/*
store.dispatch({
type: 'SET',
count: 150
})
*/