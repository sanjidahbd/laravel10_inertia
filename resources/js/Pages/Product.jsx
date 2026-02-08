import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'

import '../../assets/lib/easing/easing.min.js'
import '../../assets/lib/waypoints/waypoints.min.js'
import '../../assets/lib/owlcarousel/owl.carousel.min.js'
// import '../../assets/lib/tempusdominus/js/moment.min.js'
// import '../../assets/lib/tempusdominus/js/moment-timezone.min.js'
// import '../../assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js'
// import '../../assets/js/main.js'


import about from '../../assets/img/about.jpg'
import { Link, usePage } from '@inertiajs/react'


function Product(props) {
  const{products}=usePage().props;
{  console.log(products)}
  return (
    <>
    <FrontLayout>
 {/* Product Start */}
<div className="container-fluid py-5">
  <div className="container">
    <div className="row gx-5">
     
      <div className="col-lg-7">
        <div className="mb-4">
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Product List</h5>
          <span className='float-end'><Link href='/product/create'>New Product</Link></span>
   
        </div>
        <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
        </tr>
        {products.map(({id,name,stock,price})=>(
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{stock}</td>
          <td>{price}</td>
        </tr>
        
        ))}
        
        </table>
       
         
         
          
        </div>
      </div>
    </div>
  </div>

{/* Product End */}





    </FrontLayout>
    </>
  )
}

export default Product