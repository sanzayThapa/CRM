// components/ContactList.js

import { useEffect, useState } from 'react';
import { getContacts } from '../services/apiService';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await getContacts();
    setContacts(response.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-3 px-4">First Name</th>
            <th className="text-left py-3 px-4">Last Name</th>
            <th className="text-left py-3 px-4">Email</th>
            <th className="text-left py-3 px-4">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="text-left py-3 px-4">{contact.first_name}</td>
              <td className="text-left py-3 px-4">{contact.last_name}</td>
              <td className="text-left py-3 px-4">{contact.email}</td>
              <td className="text-left py-3 px-4">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
