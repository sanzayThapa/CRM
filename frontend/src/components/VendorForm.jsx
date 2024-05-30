import React, { useState } from 'react';
import axios from 'axios';

const VendorForm = ({ setcrm, fetchData }) => {
  const [newVendor, setNewVendor] = useState({
    name: '',
    website: '',
    status: 'active',
    link: '',
    documents: '',
    point_of_contact: '',
    contract_end: '',
    contract: null,
    service_type: '',
    last_maintained: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVendor(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setNewVendor(prev => ({
      ...prev,
      [name]: e.target.files[0]
    }));
  };

  const postVendor = async () => {
    const formData = new FormData();
    for (const key in newVendor) {
      formData.append(key, newVendor[key]);
    }

    try {
      await axios.post('http://localhost:8000/api/vendors/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setNewVendor({
        name: '',
        website: '',
        status: 'active',
        link: '',
        documents: '',
        point_of_contact: '',
        contract_end: '',
        contract: null,
        service_type: '',
        last_maintained: '',
        remarks: ''
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center space-y-3 w-full max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Vendor Name"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.name}
        />
        <input
          type="url"
          name="website"
          placeholder="Website"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.website}
        />
        <select
          name="status"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.status}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
        <input
          type="url"
          name="link"
          placeholder="Link"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.link}
        />
        <input
          type="url"
          name="documents"
          placeholder="Documents"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.documents}
        />
        <input
          type="text"
          name="point_of_contact"
          placeholder="Point of Contact"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.point_of_contact}
        />
        <input
          type="date"
          name="contract_end"
          placeholder="Contract End Date"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.contract_end}
        />
        <input
          type="file"
          name="contract"
          className="input input-accent w-full"
          onChange={handleFileChange}
        />
        <input
          type="text"
          name="service_type"
          placeholder="Type of Service"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.service_type}
        />
        <input
          type="date"
          name="last_maintained"
          placeholder="Last Maintained Date"
          className="input input-accent w-full"
          onChange={handleChange}
          value={newVendor.last_maintained}
        />
        <textarea
          name="remarks"
          placeholder="Remarks"
          className="textarea textarea-accent w-full"
          onChange={handleChange}
          value={newVendor.remarks}
        ></textarea>
        <button className="btn btn-active btn-primary w-full" onClick={postVendor}>
          Add Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorForm;
