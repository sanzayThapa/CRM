// components/InvoiceForm.js

import { useState } from 'react';
import { addInvoice } from '../services/apiService';

const InvoiceForm = ({ contactId }) => {
  const [dueDate, setDueDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([{ description: '', quantity: 1, unit_price: 0 }]);

  const handleItemChange = (index, e) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { description: '', quantity: 1, unit_price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invoice = { contact: contactId, due_date: dueDate, total_amount: totalAmount, items };
    await addInvoice(invoice);
    // Handle success (e.g., clear form, show notification)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <div>
        <label>Total Amount</label>
        <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <label>Description</label>
            <input type="text" name="description" value={item.description} onChange={(e) => handleItemChange(index, e)} />
            <label>Quantity</label>
            <input type="number" name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} />
            <label>Unit Price</label>
            <input type="number" name="unit_price" value={item.unit_price} onChange={(e) => handleItemChange(index, e)} />
            <button type="button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>Add Item</button>
      </div>
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default InvoiceForm;
