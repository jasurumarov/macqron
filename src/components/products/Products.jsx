import React from 'react'

// Images
import CardImg from '../../assets/images/product-img.png'
import CartIcon from '../../assets/icons/cart.svg'

const Products = () => {
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
            <div className="products__card">
              <div className="products__card-img">
                <img src={CardImg} alt="card img" />
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
          </div>
          <div className="products__seemore">
            <button>Показать ещё</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
