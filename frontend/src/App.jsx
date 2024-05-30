import { useState, useEffect } from 'react'
import './App.css'
import { Table } from './components/Table'
import axios from 'axios'


function App() {
  const [crm, setcrm] = useState("")
  const [isLoading, setisLoading] = useState(true)

  useEffect( () => {
    fetchData()
    console.log(crm)
  },[] )

  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/crm/")
      setcrm(response.data)
      setisLoading(false)

    }catch (error){
      console.log(error);
    }
  }


  return (
    <div className='bg-indigo-100 min-h-screen'>
      <nav className='pt-8'>
      <h1 className='text-5xl text-center pb-10'>crm Lists</h1>
      </nav>
      <crmForm
      setcrm={setcrm}
      fetchData={fetchData}
      />
      <Table 
      crm={crm}
      setcrm={setcrm}
      isLoading={isLoading}

      />
    </div>
  )
}

export default App
