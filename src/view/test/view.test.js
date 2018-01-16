import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount, shallowMount } from 'enzyme';
import { expect } from 'chai';
import TodoList from '../';

import Todo from '../todo';

import { TodoStore } from '../../store/todo';


describe('<TodoList />', () => {
  it('should render the todolist', () => {
    const todoStore = new TodoStore()
    const component = shallow(<TodoList.wrappedComponent todoStore={todoStore} />);
    expect(component.find('form').length).to.be.equal(1);
  })
})
