
const { useState, useEffect } = React;

const App = () => {
  
  return (
    <div className="App">
     <header className = "section-header">
         <section className = "header-main border-bottom">
            <div className = "container">
         <div className = "row align-items-center">
            <div className = "col-lg-2 col-4">
               mag.Zaboronok.Ru
            </div>
            <div className = "col-lg-6 col-sm-12">
               <form action="#" className = "search">
                     <div className = "input-group w-100">
                        <input type="text" className = "form-control" placeholder="Давай поищем" />
                        <div className = "input-group-append">
                           <button className = "btn btn-primary" type="submit">
                           <i className = "fa fa-search"></i>
                           </button>
                        </div>
                     </div>
               </form>
            </div> 
            <div className = "col-lg-4 col-sm-6 col-12">
               <div className = "widgets-wrap float-md-end">
                     <div className = "widget-header  me-3">
                        <a href="#" className = "icon icon-sm rounded-circle border"><i className = "fa fa-shopping-cart"></i></a>
                        <span className = "badge badge-pill badge-danger notify">0</span>
                     </div>
                     <div className = "widget-header icontext">
                        <a href="#" className = "icon icon-sm rounded-circle border"><i className = "fa fa-user"></i></a>
                        <div className = "text">
                           <span className = "text-muted">Привет!</span>
                           <div> 
                                 <a href="#">Заходи</a> |  
                                 <a href="#"> Давай знакомиться</a>
                           </div>
                        </div>
                     </div>
               </div> 
            </div> 
         </div> 
            </div> 
         </section> 
         <nav className = "navbar navbar-main navbar-expand-lg navbar-light border-bottom">
         <div className = "container">
            <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className = "navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id="navbarNav">
               <ul className = "navbar-nav">
                  <li className = "nav-item dropdown">
                  <a className = "nav-link" href="#">Домой</a>
               </li>
               <li className = "nav-item">
                  <a className = "nav-link" href="#">О нас</a>
               </li>
               <li className = "nav-item">
                  <a className = "nav-link" href="#">Купить</a>
               </li>
               <li className = "nav-item">
                  <a className = "nav-link" href="#">Друзья</a>
               </li>
               <li className = "nav-item">
                  <a className = "nav-link" href="#">Для учителей</a>
               </li>
               <li className = "nav-item">
                  <a className = "nav-link" href="#">Сувениры</a>
               </li>
               <li className = "nav-item dropdown">
                  <a className = "nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Ещё
                  </a>
                  <ul className = "dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a className = "dropdown-item" href="#">Книги для детей</a></li>
                     <li><a className = "dropdown-item" href="#">Полезные ссылки</a></li>
                     <li><hr className = "dropdown-divider" /></li>
                     <li><a className = "dropdown-item" href="#">Мызыкальные событиия</a></li>
                  </ul>
               </li>
               </ul>
            </div> 
         </div> 
         </nav>
         </header>
        
         <section className = "section-main bg padding-y">
         <div className = "container">
         <div className = "row">
            <aside className = "col-md-3">
               <nav className = "card">
                     <ul className = "menu-category">
                        <li><a href="#">Как лучше петь</a></li>
                        <li><a href="#">Как лучше НЕ петь</a></li>
                        <li><a href="#">Если соседний мальчик фальшивит</a></li>
                        <li><a href="#">Почему девочки поют тоньше</a></li>
                        <li><a href="#">Зачем ноты, если я пришёл петь?</a></li>
                        <li><a href="#">Музыка в моём смартфоне</a></li>
                        <li className = "has-submenu"><a href="#">Разности</a>
                           <ul className = "submenu">
                                 <li><a href="#">Музыкальный слух</a></li>
                                 <li><a href="#">Почему слон наступает на ухо</a></li>
                                 <li><a href="#">О чём поют птицы</a></li>
                                 <li><a href="#">Музыкальные котики</a></li>
                           </ul>
                        </li>
                     </ul>
               </nav>
            </aside>
            <div className = "col-md-9">
               <article className = "banner-wrap">
                     <img src="assets/images/banner_big.jpg" className = "w-100 rounded" />
               </article>
            </div> 
         </div>
         </div> 
         </section>
        
         <section className = "section-name padding-y-sm">
         <div className = "container">
         <header className = "section-heading">
            <a href="#" className = "btn btn-outline-primary float-end">Оглядеться</a>
            <h3 className = "section-title">Что часто покупают</h3>
         </header>
            
         <div className = "row">
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Счастливая футболка</a>
                        <div className = "price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Термокуртка для твоего голоса</a>
                        <div className = "price mt-1">$280.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Утягивающие шорты для высоких нот</a>
                        <div className = "price mt-1">$56.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Туда влезут тетрадки, а так же бутеры и конфеты =)</a>
                        <div className = "price mt-1">$179.00</div>
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Много мультиков в одной штуковине</a>
                        <div className = "price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Место для любимого слушателя</a>
                        <div className = "price mt-1">$280.00</div>
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Музыкальный браслет с картинками</a>
                        <div className = "price mt-1">$56.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div className = "col-md-3">
               <div href="#" className = "card card-product-grid">
                     <a href="#" className = "img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                     <figcaption className = "info-wrap">
                        <a href="#" className = "title">Защита твоего слуха от фальшивого пения соседей</a>
                        <div className = "price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div>
         </div> 
         </div>
         </section>
         
        
         <section className = "section-name padding-y bg">
         <div className = "container">
         <div className = "row">
         <div className = "col-md-6">
            <h3>Открой свой голос и пой,</h3>
            <p> дай своему сердцу проговориться через музыку!</p>
         </div>
         <div className = "col-md-6 text-md-end">
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
         </div>
         </div> 
         </div>
         </section>
         
         <footer className = "section-footer border-top bg">
         <div className = "container">
         <section className = "footer-top  padding-y">
            <div className = "row">
               <aside className = "col-md col-6">
               <h6 className = "title">Brands</h6>
               <ul className = "list-unstyled">
                  <li> <a href="#">Yamaha</a></li>
                  <li> <a href="#">Steinway & Sons</a></li>
                  <li> <a href="#">Kawai</a></li>
                  <li> <a href="#">Baldwin</a></li>
                  <li> <a href="#">Bechstein</a></li>
               </ul>
               </aside>
               <aside className = "col-md col-6">
               <h6 className = "title">Друзя</h6>
               <ul className = "list-unstyled">
                  <li> <a href="#">Мы</a></li>
                  <li> <a href="#">Коллективы</a></li>
                  <li> <a href="#">Найти в магазине</a></li>
                  <li> <a href="#">Правила хорошего тона</a></li>
                  <li> <a href="#">Где тут что</a></li>
               </ul>
               </aside>
               <aside className = "col-md col-6">
               <h6 className = "title">Помощь</h6>
               <ul className = "list-unstyled">
                  <li> <a href="#">Напиши нам</a></li>
                  <li> <a href="#">Подарки</a></li>
                  <li> <a href="#">Состояние заказов</a></li>
                  <li> <a href="#">Доставка</a></li>
                  <li> <a href="#">Беседка</a></li>
               </ul>
               </aside>
               <aside className = "col-md col-6">
               <h6 className = "title">Account</h6>
               <ul className = "list-unstyled">
                  <li> <a href="#"> User Login </a></li>
                  <li> <a href="#"> User register </a></li>
                  <li> <a href="#"> Account Setting </a></li>
                  <li> <a href="#"> My Orders </a></li>
               </ul>
               </aside>
               <aside className = "col-md">
               <h6 className = "title">Social</h6>
               <ul className = "list-unstyled">
                  <li><a href="#"> <i className = "fab fa-facebook"></i> Facebook </a></li>
                  <li><a href="#"> <i className = "fab fa-twitter"></i> Twitter </a></li>
                  <li><a href="#"> <i className = "fab fa-instagram"></i> Instagram </a></li>
                  <li><a href="#"> <i className = "fab fa-youtube"></i> Youtube </a></li>
               </ul>
               </aside>
            </div> 
         </section>  
         <section className = "footer-bottom row">
            <div className = "col-md-2">
               <p className = "text-muted">   2023 Екатерина Заборонок </p>
            </div>
            <div className = "col-md-8 text-md-center">
               <span  className = "px-2">mail@zaboronok.ru</span>
               <span  className = "px-2">+7 (925) 376-23-26</span>
               <span  className = "px-2">Музыка вокруг нас</span>
            </div>
            <div className = "col-md-2 text-md-end text-muted">
               <i className = "fab fa-lg fa-cc-visa"></i> 
               <i className = "fab fa-lg fa-cc-paypal"></i> 
               <i className = "fab fa-lg fa-cc-mastercard"></i>
            </div>
         </section>
         </div>
         </footer>
      
    </div>
  );
}

ReactDOM.render(
       <App />,

   document.getElementById( 'app' )
);