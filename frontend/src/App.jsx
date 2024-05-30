import { useState, useEffect } from 'react';
import './App.css';
import CrmForm from './components/CrmForm';
import { Table } from './components/Table';
import axios from 'axios';
import VendorForm from './components/VendorForm';
import { VendorTable } from './components/VendorTable';


function App() {
  const [crm, setCrm] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const crmResponse = await axios.get("http://127.0.0.1:8000/api/crm/");
      setCrm(crmResponse.data);

      const vendorResponse = await axios.get("http://127.0.0.1:8000/api/vendor/");
      setVendor(vendorResponse.data);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className='bg-indigo-100 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-10'>CRM and Vendor Lists</h1>
      </nav>
      <CrmForm setCrm={setCrm} fetchData={fetchData} />
      <Table crm={crm} setCrm={setCrm} isLoading={isLoading} />
      <VendorForm setVendor={setVendor} fetchData={fetchData} />
      <VendorTable vendor={vendor} setVendor={setVendor} isLoading={isLoading} />
    </div>
  );
}

export default App;
