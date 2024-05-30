// src/components/VendorTable.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineDeleteSweep, MdEditNote } from "react-icons/md";

export const VendorTable = ({ vendor, setvendor, isLoading }) => {
  const [editVendor, setEditVendor] = useState({
    id: null,
    name: '',
    website: '',
    status: '',
    link: '',
    documents: '',
    point_of_contact: '',
    contract_end: '',
    contract: null,
    service_type: '',
    last_maintained: '',
    remarks: ''
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/vendor/${id}/`);
      const newList = vendor.filter(vendor => vendor.id !== id);
      setvendor(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/vendor/${id}/`, value);
      const newvendor = vendor.map(vendor => vendor.id === id ? response.data : vendor);
      setvendor(newvendor);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVendor(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEditVendor(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleClick = () => {
    handleEdit(editVendor.id, editVendor);
    setEditVendor({
      id: null,
      name: '',
      website: '',
      status: '',
      link: '',
      documents: '',
      point_of_contact: '',
      contract_end: '',
      contract: null,
      service_type: '',
      last_maintained: '',
      remarks: ''
    });
  };

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
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>point_of_contact</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contract End</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contract File</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Service Type</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Last Maintained</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Remarks</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="12" className="text-center">Loading...</td>
              </tr>
            ) : (
              vendor.map((vendor) => (
                <tr key={vendor.id} className='border-b border-black'>
                  <td className='p-3 text-sm'>{vendor.name}</td>
                  <td className='p-3 text-sm'>{vendor.website}</td>
                  <td className='p-3 text-sm'>{vendor.status}</td>
                  <td className='p-3 text-sm'>{vendor.link}</td>
                  <td className='p-3 text-sm'>{vendor.documents}</td>
                  <td className='p-3 text-sm'>{vendor.point_of_contact}</td>
                  <td className='p-3 text-sm'>{new Date(vendor.contract_end).toLocaleDateString()}</td>
                  <td className='p-3 text-sm'>{vendor.contract}</td>
                  <td className='p-3 text-sm'>{vendor.service_type}</td>
                  <td className='p-3 text-sm'>{new Date(vendor.last_maintained).toLocaleDateString()}</td>
                  <td className='p-3 text-sm'>{vendor.remarks}</td>
                  <td className='p-3 text-sm font-medium flex space-x-2'>
                    <span className='text-xl cursor-pointer'>
                      <label htmlFor="edit_modal" className="btn" onClick={() => setEditVendor(vendor)}><MdEditNote /></label>
                    </span>
                    <span className='text-xl cursor-pointer'><MdOutlineDeleteSweep onClick={() => handleDelete(vendor.id)} /></span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <input type="checkbox" id="edit_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Vendor</h3>
          <input
            type="text"
            placeholder="Vendor Name"
            name="name"
            value={editVendor.name}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={editVendor.website}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={editVendor.status}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            value={editVendor.link}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="Documents"
            name="documents"
            value={editVendor.documents}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="point_of_contact"
            name="point_of_contact"
            value={editVendor.point_of_contact}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="date"
            placeholder="Contract End"
            name="contract_end"
            value={editVendor.contract_end}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="file"
            placeholder="Contract File"
            name="contract"
            onChange={handleFileChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="text"
            placeholder="Service Type"
            name="service_type"
            value={editVendor.service_type}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <input
            type="date"
            placeholder="Last Maintained"
            name="last_maintained"
            value={editVendor.last_maintained}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <textarea
            placeholder="Remarks"
            name="remarks"
            value={editVendor.remarks}
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs mt-2"
          ></textarea>
          <div className="modal-action">
            <label htmlFor="edit_modal" onClick={handleClick} className="btn btn-primary">Edit</label>
            <label htmlFor="edit_modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};
