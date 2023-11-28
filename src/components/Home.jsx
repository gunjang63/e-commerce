
import React from 'react'
import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import { items } from './Data'

const Home = () => {
  console.log(getAuth());
  const auth = getAuth();
  const navigate = useNavigate();
  const logOut = async () => {
    await auth.signOut();
    navigate('/');
  }

  return (

    // <div className="containment text-center">
    //   <div className="containment text-center">
    //     welcome to home page
    //   </div>
    //   <div className='my-5'>
    //     <h1>{auth.currentUser.displayName}</h1>
    //     <h2>{auth.currentUser.email}</h2>
    //     <img src={auth.currentUser.photoURL} alt="" />
    //   </div>


    //   <button className="btn-warning" onClick={logOut}>Login Out</button>
    // </div>
    <>
      <div className="nav-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'blue' }}>
        <div className="logo" style={{ width: '10px', marginLeft: '100px' }}>
          <b>CarBecho</b>
        </div>
        <div className="search-bar" style={{ display: 'flex' }}>
          <span style={{ marginRight: '20px' }}>CarSearch</span> <input placeholder='Search cars' autoFocus type="text" name="search" id="search" style={{ width: "600px" }} >

          </input>
        </div>
        <div className="cart" style={{ marginRight: '30px' }}>
          Cart
        </div>
        <div>
        <button className="btn btn-primary" style={{borderRadius:'10px',marginRight: '40px'}} onClick={logOut}>Login Out</button>
        </div>
      </div>
      <div className="nav-bar-wrapper" style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px', backgroundColor: '#8000ff' }}>
        <div className="items">Filters</div>
        <div className="items">NoFilter</div>
        <div className="items">Suv's</div>
        <div className="items">Hatchback</div>
        <div className="items">Coupe</div>
        <div className="items">Sedan</div>
        <div>
          Price &nbsp; <select name="" id="">
            <option value="">Price Range</option>
            <option value="price20L">{"=>2000000"}</option>
            <option value="price1cr">{"=>10000000"}</option>
            <option value="price3cr">{"=>30000000"}</option>
          </select>
        </div>
        {/* <div className="items">Price{" =>2000000"}
        
        </div>
        <div className="items">Price{" =>10000000"}</div>
        <div className="items">Price{" =>30000000"}</div> */}

      </div>
      <div className="container">
        <div className="row">
          {
            items.map((product) => {
              return (
                <>
                <div className="col-lg-4 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={product.imgSrc} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <a style={{padding:"5px", margin:"8px", backgroundColor:'white', color:'black', borderColor:'white'}} href="{product.mercedesLink}" className="btn btn-primary">For More Infomation</a>
                      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
                      <div className="btn btn-primary mx-3"> {product.price}₹</div>
                      <div className="btn btn-warning">Add to cart</div>
                      </div>
                    </div>
                  </div>

                  </div>
                </>
              )
            })
          }
        </div></div>
    </>
  )
}

export default Home
