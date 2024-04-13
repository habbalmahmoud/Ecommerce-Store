import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { removeProd } from "../../redux/actions/actions";
import logo from '../../assets/images/logo.png'
import Capture from '../../assets/images/Capture.PNG'
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
    let totalProductPrice = 0

    const dispatch = useDispatch()


    const [shop , setShop] = useState(false)

    const cartState = shop === false ? "cart" : "shopping-cart"
    const Cart = useSelector((state) => state.ManageCart.Cart)
    let cartLenVal = 0
    const cartLen = Cart?.map((item) => {
        cartLenVal += item.amount
    })

    const changeCart = (state) => {
        setShop(state)
    }

    const removeProduct = (prodId) => {
        dispatch(removeProd(prodId))
    }

    return (
        <div>
              <div className="text-white bg-black text-center p-3 fw-bold fs-3">Future App</div>
              <div className="container d-flex flex-row justify-content-between resp">
                  <div>
                      <img src={logo}></img>
                  </div>
                  <div className="d-flex pt-5">
                      <div className="mx-3 d-flex cursor-pointer cart" onClick={() => changeCart(true)}>
                          <span className="cartNum">{cartLenVal}</span>
                          <MdOutlineShoppingBag className="fs-4"/>
                          <span className="m-1">Shopping bag</span>
                          
                      </div>
                      <div className="mx-3 d-flex">
                          <img src={Capture} className="mx-2" style={{width: 30, height: 30}}></img>
                          <span className="m-1">Marko</span>
                      </div>
                  </div>
              </div>
              <div className="d-flex justify-content-around bg-black text-white p-3 fw-bold">
                  <span>50% OFF</span>
                  <span> Free shipping and returns</span>
                  <span>Different Payment Methods</span>
              </div>
              <div className={`${cartState}`}>
                  <div className="shopping-cart-content rounded pb-3">
                      <div className="d-flex justify-content-between mt-4 m-3">
                          <h4 className="">Shopping Bag</h4>
                          <IoMdClose className="fs-2 cursor-pointer" onClick={() => changeCart(false)}/>
                      </div>
                      <hr />
                      {
                          Cart?.map((item) => {
                              const circleStyle = {
                                  padding : 6,
                                  display : "inline-block",
                                  backgroundColor : item?.color,
                                  borderRadius : "50%",
                                  width : 15,
                                  height : 15,
                              }
                              let totalItemPrice = 0
                              totalItemPrice += (item?.price * item?.amount)
                              totalProductPrice += totalItemPrice
                              return (
                                  <>
                                      <div className="d-flex">
                                          <div className="itemDesc w-50 mx-4">
                                              <img src={item?.img} style={{"width" : "150px"}} className="p-3 borded rounded"></img>
                                              <h5 className="px-3">{item?.name}</h5>
                                          </div>
                                          <div className="itemSpec d-flex flex-column mt-4">
                                              <span>Selected Size : {item?.size}</span>
                                              <span>Amount : {item?.amount}</span>
                                              <span>Color :  <span className="" style={circleStyle}></span></span>
                                              <span>Single Item Price : {item?.price}$</span>
                                              <button className="removeCart" onClick={() => removeProduct(item.specialId)}>REMOVE</button>
                                          </div>
                                      </div>
                                  </>
                              )
                          })
                      }
                      <hr className="" />
                      <span className="px-3">Total Price of All Products: {totalProductPrice}$</span>
                  </div>
              </div>
            </div>
    )
}

export default Header