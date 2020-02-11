import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should setup remove expense action option',()=>{
    const action = removeExpense({id:'123abs'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abs'
    });
});

test('Should setup add expense action option object with provided values',()=>{
        const expenseData ={
            description: 'Rent',
            amount:190230,
            createdAt:1000,
            note:'This is my note'
        }
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id:expect.any(String)
            }
        })
});

test('Should setup add expense action option object with no provided values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description: '',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    })
});

test('Should setup edit expense action option',()=>{
    const action = editExpense('123abc',{note:'New note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'New note value'
        }
    })
});