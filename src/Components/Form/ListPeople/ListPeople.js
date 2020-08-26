import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItemPeople from './ListItemPeople/ListItemPeople';
import style from './ListPeople.module.css'
import PropTypes from 'prop-types';

const ListPeople = ({ contacts, deliteContact }) => {

  console.log("contacts", contacts)
  return (
    <ul className={style.list}>
      {contacts.map(contact => <ListItemPeople key={uuidv4()} {...contact} deliteContact={deliteContact} />)}
    </ul>
  )

}

export default ListPeople

ListPeople.propTypes = {
  deliteContact:PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};