import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

// Components
import Model from '../model/Model'

// Images
import CartIcon from '../../assets/icons/cart.svg'
import CardImg from '../../assets/images/product-img.png'
import { IoStar } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

const Products = ({ data, error, loading }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [detailData, setDetailData] = useState(null)

  useEffect(() => {
    let id = searchParams.get("detail")
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(res => setDetailData(res.data))
    }
  }, [searchParams])

  const closeDetailModel = () => {
    setDetailData(null)
    setSearchParams({})
  }

  let products = data?.map(product => (
    <div key={product.id} className="products__card">
      <div className="products__card-img">
        <img onClick={() => setSearchParams({ detail: product.id })} src={product.images[0]} alt="card img" />
      </div>
      <div className="products__card-title">
        <h3>Сердце</h3>
        <p>24 штуки в коробке в виде сердца. <br />
          Ассорти из 6 вкусов </p>
      </div>
      <div className="products__card-prices">
        <h4>2800 руб</h4>
        <button><img src={CartIcon} alt="cart icon" /> В корзину</button>
      </div>
    </div>
  ))
  return (
    <section className='products-section'>
      <div className="container">
        <div className="products-section__content">
          <p className="products__pagination">Главная &gt; Каталог &gt; <span>Готовые наборы</span></p>
          <h1>Готовые наборы</h1>
          <ul className="products__category-list">
            <li>Свадьба</li>
            <li>Девичник</li>
            <li>День рождения </li>
            <li>8 марта</li>
            <li>23 февраля</li>
            <li>Новый год</li>
            <li>День учителя</li>
            <li>День тренера</li>
            <li>Пасха</li>
            <li>Без печати</li>
          </ul>
          <div className="products__cards">
            {products}
            {detailData ?
              <Model close={closeDetailModel} >
                <div className="detail__product">
                  <div className="detail__product-img">
                    <img src={detailData?.thumbnail} alt={detailData?.title} />
                  </div>
                </div>
                <div className="detail__title">
                  <h3>{detailData?.title}</h3>
                  <div className='detail__title-rating'>
                    <span>
                      {new Array(Math.round(detailData?.rating)).fill(<IoStar className='rate' />)} {new Array(Math.round(5 - detailData?.rating)).fill(<IoStar className='unrate' />)}
                    </span>
                    <h5>(3.4)</h5>
                  </div>
                  <p className="detail__title-desc">{detailData?.description}</p>
                  <div className="detail__title-brand">
                    <p><span>Category: </span>{detailData?.category}</p>
                    <p><span>Brand: </span>{detailData?.brand}</p>
                    <p><span>Stock: </span>{detailData?.stock}</p>
                  </div>
                  <div className="detail__title-prices">
                    <button>Add To Cart</button>
                    <h2>${detailData?.price}</h2>
                    <del>${(detailData?.price * 1.5).toFixed(2, 4)}</del>
                  </div>
                </div>
                <button onClick={() => {
                  setSearchParams({})
                  setDetailData(null)}} className='detail__close'><IoMdClose /></button>
              </Model>
              : <></>
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
