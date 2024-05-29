// components/ContactDetails.js

import InvoiceForm from './InvoiceForm';

const ContactDetails = ({ contact }) => {
  return (
    <div>
      <h2>{contact.first_name} {contact.last_name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <InvoiceForm contactId={contact.id} />
    </div>
  );
};

export default ContactDetails;
