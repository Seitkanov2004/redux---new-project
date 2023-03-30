import React from 'react';

const BasketTable = ({el}) => {
    return (
        <tr>
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={60} alt=""/>
            </td>
            <td className="px-6 py-4">
                Wearables
            </td>
            <td className="px-6 py-4">
                {el.price}
            </td>
            <td className="px-6 py-4">
                <a href="#"
                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default BasketTable;