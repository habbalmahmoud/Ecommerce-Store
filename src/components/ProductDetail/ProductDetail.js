import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storeData } from "../../assets/data/dummyData";
import { UseDispatch } from "react-redux";
import { assignProduct } from "../../redux/actions/actions";

const ProductDetail = () => {
    const {productId} = useParams()
    const product = useSelector((state) => state.AssignProduct.Product)
    const {img} = product
    const dispatch = useDispatch()

    const getProductData = () => storeData.map((item) => {
        if (item.id == productId) {
            const productData = item

            dispatch(assignProduct(productData))
        }
    })

    useEffect(() => {
        if (productId && productId !== "") getProductData()
    },[productId])

    return (
        <div>
            <img src={img}></img>
        </div>
    )
}

export default ProductDetail