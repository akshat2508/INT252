import React from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'

const App = () => {
  let data1  = 10;
  let data2  = 'hello world';
  var data3  = ['ram' ,'shyam','krishna'];
  const cardData = [{
    url : 'https://getyourcollege.s3.ap-south-1.amazonaws.com/college/images/1748253771746.jpeg',
    title : 'LPU' ,
    description : 'Lovly Professional University'
  },

  {
    url : 'https://getyourcollege.s3.ap-south-1.amazonaws.com/college/images/1748253771746.jpeg',
    title : 'LPU2' ,
    description : 'Lovly Professional University'
  },
  {
    url : 'https://getyourcollege.s3.ap-south-1.amazonaws.com/college/images/1748253771746.jpeg',
    title : 'LPU3' ,
    description : 'Lovly Professional University'
  }
]

  return (
    <>
    <Navbar/>
    <CardContainer props = {cardData} />
    </>
  )
}

export default App