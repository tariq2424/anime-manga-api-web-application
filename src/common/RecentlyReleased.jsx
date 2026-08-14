import React, { useState, useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// CSS (IMPORTANT)
import "swiper/css";
import "swiper/css/navigation";

function RecentlyReleased() {

  let [topanime,setTopAnime]= useState([]);
  let [topmanga,setTopManga]= useState([]);

    async function FetchTopAnimes() {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTopAnime(data["data"]);
        console.log(topanime);
      });  
  }

    async function FetchTopMangas() {
    fetch("https://api.jikan.moe/v4/top/manga")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTopManga(data["data"]);
        console.log(topmanga);
      });  
  }

  useEffect(() => {
         FetchTopAnimes();
         FetchTopMangas();
        }, []);


 return (<>
  <section className="trending p-40">
    <div className="container-fluid">
      <h2 className="h-40 mb-40 bold">Recently Released-Top Anime</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
      >
        {topanime.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="card st-2">
              <div className="img-block mb-20">
                
                {/* ✅ FIX HERE */}
                <img
                  src={value.images.webp.large_image_url}
                  alt={value.title_english}
                />

                <a href="#" className="cus-btn light">
                  Stream Now <i className="far fa-play"></i>
                </a>
              </div>

              <div className="content">
                <h4 className="h-24 color-white bold">
                  {value.title_english}
                </h4>

                <ul className="tag unstyled">
                  
                  {/* ✅ SAFE ACCESS */}
                  <li>{value.genres[0]?.name}</li>
                  
                 <li>{value.year?+value.year:""}</li>
                    <li>{value.episodes?"EP-"+value.episodes:""}</li>

                  <li className="icon">
                    <i className="fas fa-star"></i>
                  </li>

                  <li>{value.score}</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>

  <section className="trending p-40">
    <div className="container-fluid">
      <h2 className="h-40 mb-40 bold">Recently Released-Top Manga</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
      >
        {topmanga.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="card st-2">
              <div className="img-block mb-20">
                
                {/* ✅ FIX HERE */}
                <img
                  src={value.images.webp.large_image_url}
                  alt={value.title_english}
                />

                <a href="#" className="cus-btn light">
                  Stream Now <i className="far fa-play"></i>
                </a>
              </div>

              <div className="content">
                <h4 className="h-24 color-white bold">
                  {value.title_english}
                </h4>

                <ul className="tag unstyled">
                  
                  {/* ✅ SAFE ACCESS */}
                  <li>{value.genres[0]?.name}</li>
                  
                 <li>{value.published.prop.from.year}</li>
                    <li>{value.episodes?"EP-"+value.episodes:""}</li>

                  <li className="icon">
                    <i className="fas fa-star"></i>
                  </li>

                  <li>{value.score}</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  </>
);
}

export default RecentlyReleased