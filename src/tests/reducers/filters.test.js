import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('Should setup default filter values',()=>{
    const state=filtersReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    });
})


test('Should set sortBy to amount',()=>{
    const state = filtersReducers(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})


test('Should set sortBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const state =filtersReducers(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})


test('Should set text filter',()=>{
    const text='Rent';
    const state= filtersReducers(undefined,{type:'SET_TEXT_FILTER',text});
    expect(state.text).toBe(text);
})


test('Should set startDate filter',()=>{
    const date= moment(0);
    const state=filtersReducers(undefined,{type:'SET_START_DATE',date});
    expect(state.startDate).toEqual(date);
})

test('Should set endDate filter',()=>{
    const date= moment(0);
    const state=filtersReducers(undefined,{type:'SET_END_DATE',date});
    expect(state.endDate).toEqual(date);
})