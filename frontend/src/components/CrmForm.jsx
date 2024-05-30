import React, { useState } from 'react';
import axios from 'axios';

const CrmForm = ({ setCrm, fetchData }) => {
  const [newCrm, setNewCrm] = useState({
    body: ''
  });

  const handleChange = (e) => {
    setNewCrm(prev => ({
      ...prev,
      body: e.target.value
    }));
    console.log(newCrm);
  }

  const postCrm = async () => {
    try {
      await axios.post('http://localhost:8000/api/crm/', newCrm);
      // setCrm(prevCrm => [...prevCrm, newCrm]);
      setNewCrm({ body: '' });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Add your CRM task" 
          className="input input-accent w-full max-w-xs" 
          onChange={handleChange} 
          value={newCrm.body}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              postCrm();
            }
          }}
        />
        <button className="btn btn-active btn-primary ml-3" onClick={postCrm}>Add CRM</button>
      </div>
    </div>
  );
};

export default CrmForm;
