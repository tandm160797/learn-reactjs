import React from 'react';
import ListContact from './Contact/components/ListContact';

const ContactFeature = (props) => {
  const contacts = [
    { id: 1, name: 'Papa', phone: '0704573673' },
    { id: 2, name: 'Mama', phone: '0372119171' },
    { id: 3, name: 'Tiểu hổ', phone: '0356874112' }
  ];

  return (
    <>
      <ListContact contacts={contacts} />
    </>
  );
};

export default ContactFeature;
