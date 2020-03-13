import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSES
const addExpense = (expense) => {
	return {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description: expense.description ? expense.description : '',
			note: expense.note ? expense.note: '',
			amount: expense.amount ? expense.amount: 0,
			createdAt: expense.createdAt ? expense.createdAt: 0
		}
	}
}

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		return state.concat(action.expense)
		default:
		return state;
	}
}

//filters reducer

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
		return state;
	}
}

// Store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
	);

store.subscribe(()=>{
	console.log(store.getState());
})
const expenseOne = store.dispatch(addExpense({description: 'Vacation', amount: 500}));

const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 600 })
	);