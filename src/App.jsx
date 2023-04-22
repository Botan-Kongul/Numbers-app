import axios from "axios";
import { useState } from "react"

function App() {
  const [number, setNumber] = useState('')
  const [type, setType] = useState('')
  const [res, setRes] = useState('')

  const handleSubmit = async () => {
    const result = await axios.get(`http://numbersapi.com/${number}/${type}`)
    setRes(result.data)

  }

  return (
    <div className="h-screen bg-gray-800 text-white flex justify-center items-center flex-col">
      <div className="font-bold text-4xl text-black bg-zinc-200 p-3 rounded ">The Story of Numbers</div>
      <div className="mt-2 bg-zinc-200 p-1 rounded text-black">Enter a Random Number and Subject </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2 text-center ">
        Enter a number
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
      </label>

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
        Select a Category
        <select value={type} onChange={(e) => setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">        Select a Category
          </option>
          <option value="math">Math</option>
          <option value="year">Year</option>
          <option value="date">date</option>
        </select>
      </label>
      <button onClick={handleSubmit} className="inline-block py-4 text-xl text-white bg-gray-600 px-7 hover:bg-gray-700 rounded-xl mt-3">
        Avra Kedabra
      </button>

      <div className="bg-gray-200 px-4 py-2  mt-5 rounded-md">
        <p className="text-gray-800 font-medium mb-2">Result:</p>
        <p className="text-gray-600">{res}</p>
      </div>





    </div >
  )
}

export default App
