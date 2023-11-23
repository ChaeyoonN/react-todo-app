import React from 'react';
import TodoMain from './TodoMain';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {
  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain />
      <TodoInput />
    </div>
  );
};

export default TodoTemplate;
