import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainCards.css';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'


function MainCards() {
  return (


    <div className='bgc' >
      <h1 className='cards-header'>Info About General Places:</h1>
      <section>
        <div className="container py-4">

          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src={image1} alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue"><a href="#/" alt=" ">Podcast Title</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                <li className="tag__item play blue">
                  <a href="#/" alt=" "><i className="fas fa-play mr-2" />Play Episode</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard dark red">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src={image2} alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red"><a href="#/" alt=" ">Podcast Title</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                <li className="tag__item play red">
                  <a href="#/" alt=" "><i className="fas fa-play mr-2" />Play Episode</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard dark green">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src={image3} alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green"><a href="#/" alt=" ">Podcast Title</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                <li className="tag__item play green">
                  <a href="#/" alt=" "><i className="fas fa-play mr-2" />Play Episode</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard dark yellow">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src={image4} alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow"><a href="#/" alt=" ">Podcast Title</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                <li className="tag__item play yellow">
                  <a href="#/" alt=" "><i className="fas fa-play mr-2" />Play Episode</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

    </div>
  )
}

export default MainCards