import React from "react"
import ProductCatagoryRow from "./ProductCatagoryRow"
import ProductRow from "./ProductRow"

export default  function ProductTable({ products }) {
    const row = []
    let lastCatagory = null
    products.forEach((product) => {
        if (products.catagory !== lastCatagory) {
            row.push(
                <ProductCatagoryRow
                    catagory={product.catagory}
                    key={product.catagory} />

            )
        }

        row.push(
            <ProductRow
                product={product}
                key={product.name} />
        )
        lastCatagory = product.catagory
    })
    return (

        <table>
        {console.log("row", row)}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>

        </table>
    )
}
