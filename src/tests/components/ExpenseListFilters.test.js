import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByAmount=jest.fn();
    sortByDate=jest.fn();
    setEndDate=jest.fn();
    setStartDate=jest.fn();
    wrapper=shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with all data correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change',()=>{
    wrapper.find('input').prop('onChange')({
        target:{value:altFilters.text}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('Should sort by date',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value:filters.sortBy}
    });
    expect(sortByDate).toHaveBeenCalledWith();
});

test('Should sort by amount',()=>{
    wrapper.find('select').simulate('change',{
        target:{value:altFilters.sortBy}
    });
    expect(sortByAmount).toHaveBeenCalledWith();
});

test('Should handle date changes',()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes',()=>{
    const calendarFocused= 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});