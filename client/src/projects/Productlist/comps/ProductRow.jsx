import React from "react"

export default function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: "red" }}>

            {product.name}
        </span>
    return (

        <tr>
            <td>
                {product.price}
                {product.name}

            </td>

        </tr>
    )
}



