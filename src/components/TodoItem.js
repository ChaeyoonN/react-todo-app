import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import './scss/TodoItem.scss';
import cn from 'classnames';

const TodoItem = ({ item, remove, check }) => {
  const { id, title, done } = item; // item.id 등이라고 안쓰고 간단히 쓰기 위해 디스트럭쳐링

  return (
    <li className='todo-list-item'>
      <div
        className={cn('check-circle', { active: done })}
        onClick={() => check(id, done)}
      >
        <MdDone />
      </div>
      <span className={cn('text', { finish: done })}>{title}</span>
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
