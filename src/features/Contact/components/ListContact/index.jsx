import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ListContact = (props) => {
  const { contacts } = props;

  return (
    <ul className="list-contact">
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
        </li>
      ))}
    </ul>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.array
};

ListContact.defaultProps = {
  contacts: []
};

export default ListContact;
