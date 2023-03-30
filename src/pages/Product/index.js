import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AllProduct from "./allProduct";
import {getProduct} from "../../redux/Reduser";

const Product = () => {

    const dispatch = useDispatch()

    const {product} = useSelector(state => state.main)

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <div className="container flex flex-wrap">
            {
                product.map(el => <AllProduct el={el}/>)
            }
        </div>
    );
};

export default Product;