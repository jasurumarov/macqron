import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import HeartIcon from '../../assets/icons/heart.svg'
import DeliveryIcon from '../../assets/icons/delivery.svg'
import DropIcon from '../../assets/icons/drop.svg'
import InstaIcon from '../../assets/icons/insta-footer.svg'
import FbIcon from '../../assets/icons/fb-footer.svg'
import VkIcon from '../../assets/icons/vk-footer.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav>
                    <div className="footer__services">
                        <div className="footer__services-items">
                            <div>
                                <img src={DropIcon} alt="heart icon" />
                                <p>Готовим вручную <br /> и c любовью</p>
                            </div>
                            <div>
                                <img src={DeliveryIcon} alt="delivery car icon" />
                                <p>Доставим <br /> в день заказа</p>
                            </div>
                            <div>
                                <img src={HeartIcon} alt="drop icon" />
                                <p>100% <br /> миндальная мука <br /> и натуральные <br /> ингредиенты</p>
                            </div>
                        </div>
                        <p className="footer__services-copyrights">© 2021 Макароншоп <br /> OOO "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, <br /> дом 22</p>
                    </div>
                    <div className="footer__lists">
                        <ul>
                            <h3>Информация</h3>
                            <li>O компании</li>
                            <li>Гарантии вкуса и <br /> свежести</li>
                            <li>Доставка и оплата</li>
                            <li>Контакты</li>
                        </ul>
                        <ul>
                            <h3>Каталог</h3>
                            <li>Каталог десертов</li>
                            <li>Готовые наборы</li>
                            <li>Собрать свой набор</li>
                            <li>Наборы c печатью</li>
                            <li>Свадебные предложения</li>
                            <li>Акции</li>
                        </ul>
                        <ul>
                            <h3>ДЛЯ БИЗНЕСА</h3>
                            <li>Корпоративные подарки</li>
                            <li>Для юридических лиц</li>
                            <li>Оповикам</li>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <Link to={'tel: +7 (812) 309 82 88'}>+7 (812) 309 82 88</Link>
                        <p>с 9:00 до 21:00</p>
                        <div>
                            <Link to={'https://www.instagram.com/1umarov.jasur/'} target='_blank'>
                                <img src={InstaIcon} alt="insta icon" />
                            </Link>
                            <Link to={'https://www.facebook.com'} target='_blank'>
                                <img src={FbIcon} alt="facebook icon" />
                            </Link>
                            <Link to={'https://www.vkontakte.com'} target='_blank'>
                                <img src={VkIcon} alt="vkontakte icon" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
