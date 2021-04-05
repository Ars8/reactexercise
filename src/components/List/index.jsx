import React from 'react';
import classNames from 'classnames';

import removeSvg from '../../assets/img/remove.svg';

import './List.scss';

const List = ({ items, isRemovable, onClick, onRemove }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => onRemove(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
