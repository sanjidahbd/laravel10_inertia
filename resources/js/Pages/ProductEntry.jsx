import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import { useForm } from '@inertiajs/react'





function ProductEntry() {

  const { data, setData, errors, post } = useForm({
    name: "",
    details: "",
    sku: "",
    stock: "",
    price: "",
    image: "",
    category_id: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    post(route("product.store"));

  }
  return (
    <>


      <FrontLayout>
        {/* Product Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row gx-5">

              <div className="col-lg-7">
                <div className="mb-4">
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Product Entry</h5>


                </div>
                <from action="" onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder='Enter Product Name' value={data.name} onChange={(e) => setData("name", e.target.value)} />

                  <input type="text" name="details" placeholder='Enter Product Details' value={data.details} onChange={(e) => setData("details", e.target.value)} />
                  <input type="text" name="sku" placeholder='Enter Product Sku' value={data.sku} onChange={(e) => setData("sku", e.target.value)} />
                  <input type="number" name="stock" placeholder='Enter Product Stock' value={data.stock} onChange={(e) => setData("stock", e.target.value)} />
                  <input type="number" name="price" placeholder='Enter Product Price' value={data.price} onChange={(e) => setData("price", e.target.value)} />
                  <input type="file" name="image" placeholder='Enter Product Image' />

                  <select name="cat_id" id="" value={data.category_id} onChange={(e) => setData("category_id", e.target.value)}>
                    <option value="">Select One</option>
                    <option value="1">Shirt</option>
                    <option value="2">Pant</option>


                  </select><br></br>
                  <button className="btn btn-primary" >SAVE</button>

                </from>




              </div>
            </div>
          </div>
        </div>

        {/* Product End */}





      </FrontLayout>
    </>

  )
}

export default ProductEntry