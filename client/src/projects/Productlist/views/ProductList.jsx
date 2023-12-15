import React from "react"
import data from "../data/data"
import FilterableProoductTable from "../comps/FilterableProductTable"


export default function ProductList(Products){


    return (
<>


{
    <FilterableProoductTable products={data}/>
}

</>

    )

}