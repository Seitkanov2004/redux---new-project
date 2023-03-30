import React from 'react';
import BasketTable from "./basketTable";
import {useSelector} from "react-redux";

const Basket = () => {

    const {basket} = useSelector(state => state.basket)

    return (
        <div className="container">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => <BasketTable el={el}/>)
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Basket;