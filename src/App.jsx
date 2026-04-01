import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Stats from './components/homepage/stats/Stats'
import Selection from './components/homepage/productCard/Selection'
import Navbar from './components/navbar/Navbar'
import ThreeCard from './components/homepage/ThreeCard/ThreeCard'
import Footer from './components/footer/Footer'
import Layout from './components/homepage/Layout/Layout'
import { ToastContainer } from 'react-toastify'


const promise=async()=>{
    const res= await fetch("/data.json")
    const data=await res.json()
    return data;
}

const promiseData=promise();
function App() {

 const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      <Navbar selectedPlayers={selectedPlayers}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span class="$$loading $$loading-spinner $$loading-lg"></span>}>
        <Selection setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} promiseData={promiseData}></Selection>
      </Suspense>
      <Layout></Layout>
      <ThreeCard></ThreeCard>
      <Footer></Footer>

       <ToastContainer />

    </>
  )
}

export default App
