import React from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'

const WebPage = () => {
      let data1  = 10;
  let data2  = 'hello world';
  var data3  = ['ram' ,'shyam','krishna'];
  const cardData = [{
    url : 'https://getyourcollege.s3.ap-south-1.amazonaws.com/college/images/1748253771746.jpeg',
    title : 'LPU' ,
    description : 'Lovly Professional University'
  },

  {
    url : 'https://www.lpu.in/lpu-assets/images/home-page/highlights/modi.webp',
    title : 'LPU2' ,
    description : 'Lovly Professional University'
  },
  {
    url : 'https://happenings.lpu.in/wp-content/uploads/2019/08/LPU.jpg',
    title : 'LPU3' ,
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
            <CardContainer cards = {cardData} />
        </>
  )
}

export default WebPage