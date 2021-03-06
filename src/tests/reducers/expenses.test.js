import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})


test('Should remove expense by id',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense if id not found',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test('Should add an expense',()=>{
    const action={
        type:'ADD_EXPENSE',
        expense:{
            description:'Nuevo',
            note:'rest',
            amount:19511,
            createdAt: 2000,
            id:'4'
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense])
})

test('Should edit an expense',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'3',
        updates:{
            description:'Nuevo En serio',
            note:'rest fedos',
            amount:19511
        }
    }
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],{...expenses[2],...action.updates}])
})


test('Should no edit an expense if expense not found',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id:'4',
        updates:{
            description:'Cola'
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})