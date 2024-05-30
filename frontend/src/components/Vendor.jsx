// frontend/src/components/Vendors.jsx

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { VendorTable } from './VendorTable';
import { MdOutlineDeleteSweep, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdEditNote } from "react-icons/md";

export const Table = ({ crm, setcrm, isLoading }) => {
  const [editText, setEditText] = useState({
    id: null,
    body: ''
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/vendors/${id}/`);
      const newList = crm.filter(crmItem => crmItem.id !== id);
      setcrm(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/vendors/${id}/`, value);
      const newcrm = crm.map(crmItem => crmItem.id === id ? response.data : crmItem);
      setcrm(newcrm);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, { 'completed': !value });
  };

  const handleChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }));
  };

  const handleClick = () => {
    handleEdit(editText.id, editText);
    setEditText({
      id: null,
      'body': ''
    });
  };

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/vendors/');
        setcrm(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVendors();
  }, [setcrm]);

  return (
    <div className='py-8 flex justify-center'>
      <div className='w-11/12 max-w-4xl overflow-x-auto'>
        <table className='min-w-full'>
          <thead className='border-b-2 border-black'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Vendor Name</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Website</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Link</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Documents</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Point of Contact</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contract End</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contract</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Service Type</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Last Maintained</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Remarks</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="12" className="text-center">Is Loading</td>
              </tr>
            ) : (
              crm.map((crmItem) => (
                <tr key={crmItem.id} className='border-b border-black'>
                  <td className='p-3 text-sm'>{crmItem.name}</td>
                  <td className='p-3 text-sm'>{crmItem.website}</td>
                  <td className='p-3 text-sm'>{crmItem.status}</td>
                  <td className='p-3 text-sm'>{crmItem.link}</td>
                  <td className='p-3 text-sm'>{crmItem.documents}</td>
                  <td className='p-3 text-sm'>{crmItem.point_of_contact}</td>
                  <td className='p-3 text-sm'>{new Date(crmItem.contract_end).toLocaleDateString()}</td>
                  <td className='p-3 text-sm'>{crmItem.contract}</td>
                  <td className='p-3 text-sm'>{crmItem.service_type}</td>
                  <td className='p-3 text-sm'>{new Date(crmItem.last_maintained).toLocaleDateString()}</td>
                  <td className='p-3 text-sm'>{crmItem.remarks}</td>
                  <td className='p-3 text-sm font-medium flex space-x-2'>
                    <span className='text-xl cursor-pointer'>
                      <label htmlFor="my_modal_6" className="btn" onClick={() => setEditText(crmItem)}><MdEditNote /></label>
                    </span>
                    <span className='text-xl cursor-pointer'><MdOutlineDeleteSweep onClick={() => handleDelete(crmItem.id)} /></span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Vendor</h3>
          <input
            type="text"
            placeholder="Type here"
            value={editText.body}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-8"
          />
          <div className="modal-action">
            <label htmlFor="my_modal_6" onClick={handleClick} className="btn btn-primary">Edit</label>
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};
