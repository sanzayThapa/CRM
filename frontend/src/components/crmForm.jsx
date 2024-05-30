import React, { useState } from 'react';
import axios from 'axios';

const crmForm = ({setcrm, fetchData}) => {
  const [newcrm, setNewcrm] = useState({
    'body': ''
  })
  const handleChange = (e) => {
    setNewcrm(prev => ({
      ...prev,
      'body': e.target.value
  }))
  console.log(newcrm);
}

const postcrm = async () => {
  try {
    await axios.post('http://localhost:8000/api/crm/', newcrm)
    // setcrm(prevcrm => [...prevcrm,newcrm])
    setNewcrm({'body': ''})
    fetchData()
  } catch(error){
    console.log(error);
  }
}





  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Add your crm task" 
          className="input input-accent w-full max-w-xs" 
          onChange={handleChange} value={newcrm.body}
          onKeyDown={(e) =>{
            if(e.key === 'Enter'){
              postcrm()
            }
          }}
        />
        <button className="btn btn-active btn-primary ml-3" onClick={postcrm}>Add crm</button>
      </div>
    </div>
  );
};

export default crmForm;