import React, { useState } from 'react'
import { useGetProductsQuery, useGetProductsCategoryQuery } from '../../context/api/productsApi'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Components
import Products from '../../components/products/Products'

const Home = () => {
    const [count, setCount] = useState(6)
    const [categoryValue, setCategoryValue] = useState('')

    const categoryPath = categoryValue ? `category/${categoryValue}` : ''
    const { data, error, isLoading } = useGetProductsQuery({ params: { limit: count }, category: categoryPath })
    const { data: category } = useGetProductsCategoryQuery()

    const categories = category?.map(category => (
        <SwiperSlide onClick={() => setCategoryValue(category)} value={category} className='products__category-listItem' key={category}>{category}</SwiperSlide>
    ))

    return (
        <main className='home-page'>
            <p className="products__pagination">Главная &gt; Каталог &gt; <span>Готовые наборы</span></p>
            <h1>Готовые наборы</h1>
            <div className="container">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={8}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="products__category-list">
                    <SwiperSlide onClick={() => setCategoryValue('')} value={'all'} className='products__category-listItem'>All</SwiperSlide>
                    {categories}
                </Swiper>
            </div>
            <Products data={data?.products} error={error} loading={isLoading} />
            <div className="products__seemore">
                <button onClick={() => setCount(count + 6)}>Показать ещё</button>
            </div>
        </main>
    )
}

export default Home