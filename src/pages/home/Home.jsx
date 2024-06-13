import React, { useState } from 'react'
import { useGetProductsQuery, useGetProductsCategoryQuery } from '../../context/api/productsApi'

// Components
import Products from '../../components/products/Products'

const Home = () => {
    let [count, setCount] = useState(6)
    let { data, error, isLoading } = useGetProductsQuery({limit: count})
    let { data: category } = useGetProductsCategoryQuery()
    return (
        <main>
            <Products category={category} data={data?.products} error={error} loading={isLoading} />
            <div className="products__seemore">
              <button onClick={() => setCount(count + 6)}>Показать ещё</button>
            </div>
        </main>
    )
}

export default Home
