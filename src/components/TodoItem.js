import React from 'react';
import { MdDelete, MdDoNotDisturb, MdDone } from 'react-icons/md';
import './scss/TodoItem.scss';

const TodoItem = ({ item, remove }) => {
  const { id, title, done } = item; // item.id 등이라고 안쓰고 간단히 쓰기 위해 디스트럭쳐링

  return (
    <li className='todo-list-item'>
      <div className='check-circle'>
        <MdDone />
      </div>
      <span className='text'>{title}</span>
      <div
        className='remove'
        onClick={() => remove(id)}
      >
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
