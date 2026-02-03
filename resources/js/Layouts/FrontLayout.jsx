import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import React from 'react'


function FrontLayout({children}) {
  return (
    <>
<div>
 
 <TopBar/>

 <NavBar/>

</div>




    {children}
    <div>
 
 <Footer/>

</div>

  
    </>
  )
}

export default FrontLayout