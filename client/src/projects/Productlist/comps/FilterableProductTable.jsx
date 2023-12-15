import React from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default function FilterableProoductTable({ products }){
    return (
<div>

    <SearchBar products={products}/>
    <ProductTable products={products}
    />

</div>
    )
}