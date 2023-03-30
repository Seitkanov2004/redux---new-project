import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {BsBasket} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";

const Product = ({el}) => {

    const [btn, setBtn] = useState(false)

    const [heard, setHeard] = useState(false)

    const dispatch = useDispatch()


    const addToBasket = (el) => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }


    const addToFavorite = (el) => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }

    const getButton = () => {
        setBtn(!btn)
    }

    const getHeard = () => {
        setHeard(!heard)
    }
    return (
        <div className="m-4 flex items-center justify-center w-[300px]">

            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-[300px]" src={el.image} alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                    <div className="flex">
                        <div >
                            {
                                btn ? <NavLink to={"/basket"}>
                                        <button
                                            className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5
                                      text-center mr-2 mb-2">перейти в &nbsp; <BsBasket/></button>
                                    </NavLink>
                                    : <button
                                        onClick={() => {
                                            addToBasket(el)
                                            getButton()
                                        }}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        добовить в &nbsp; <BsBasket/>
                                    </button>
                            }
                        </div>
                        <div className="ml-2">
                            {
                                heard ? <NavLink to={"/favorite"}>
                                        <button
                                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                         mr-2 mb-2"><AiTwotoneHeart/></button>
                                    </NavLink>
                                    : <button onClick={() => {
                                        addToFavorite(el)
                                        getHeard()
                                    }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                         mr-2 mb-2"><AiOutlineHeart/></button>
                            }

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;