import { setTextFilter, sortByAmount,sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from 'moment';

test('Should set the text filter with no text value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
})
test('Should set the text filter with text value',()=>{
    const text = 'Rent'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
})
test('Should set the sortBy filter with the word amount',()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})
test('Should set the sortBy filter with the date',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})
test('Should set the start day filter',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})
test('Should set the end day filter',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})