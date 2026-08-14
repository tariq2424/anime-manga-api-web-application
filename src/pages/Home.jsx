import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import RecentlyReleased from "../common/RecentlyReleased";
import { data } from "react-router-dom";

function Home() {
  // https://api.jikan.moe/v4/genres/anime

  let [animegenres, setAnimeGenres] = useState([]);
  let [mangagenres, setMangaGenres] = useState([]);

  async function FetchAnimesGeners() {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAnimeGenres(data["data"].slice(0, 6));
        console.log(animegenres);
      });
  }


    // https://api.jikan.moe/v4/genres/manga
    async function FetchMangasGeners() {
    fetch("https://api.jikan.moe/v4/genres/manga")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMangaGenres(data["data"].slice(0, 6));
        console.log(mangagenres);
      });
  }
  useEffect(() => {
    FetchAnimesGeners();
    FetchMangasGeners();
  }, []);

  return (
    <div>
      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Header />
        {/* Hero Banner start */}
        <div className="hero-banner-1 p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-8 mb-30 mb-xxl-0">
                <div className="anime-card ">
                  <div className="content">
                    <img
                      src="assets/media/logo/logo-1.png"
                      className="logo"
                      alt
                    />
                    <h2 className="h-40 bold color-white mb-16">
                      Demon Slayer: <br /> Kimetsu no Yaiba
                    </h2>
                    <ul className="tag unstyled mb-16">
                      <li>18+</li>
                      <li>HD</li>
                      <li>2029</li>
                      <li>Anime</li>
                      <li>1hr 45m</li>
                    </ul>
                    <p className="color-white mb-32">
                      <b className="color-medium-gray">Starting:</b> Natsuki
                      Hanae, Akari Kito, Hiro Shimono
                    </p>
                    <div className="btn-block">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        className="cus-btn primary"
                      >
                        <i className="far fa-play" />
                        Play
                      </a>
                      <a href="anime-detail.html" className="cus-btn sec">
                        <i className="fal fa-info-circle" />
                        More info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="row">
                  <div className="col-xxl-12 col-xl-6 col-12">
                    <div className="anime-sm-card mb-30">
                      <img
                        src="assets/media/anime-card/img-1.png"
                        className="br-12"
                        alt
                      />
                      <div className="content">
                        <h4 className="h-30 color-white mb-8">
                          My Hero Academia
                        </h4>
                        <ul className="tag unstyled mb-16">
                          <li>2019</li>
                          <li className="sec">18+</li>
                          <li>4 Seasons</li>
                          <li>Anime</li>
                        </ul>
                        <p className=" sm color-medium-gray">
                          Sentenced to death, ninja Gabimaru the Hollow finds
                          himself apathetic.{" "}
                        </p>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#videoModal"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-6 col-12">
                    <div className="anime-sm-card">
                      <img
                        src="assets/media/anime-card/img-2.png"
                        className="br-12"
                        alt
                      />
                      <div className="content">
                        <h4 className="h-30 color-white mb-8">
                          Hell’s Paradise
                        </h4>
                        <ul className="tag unstyled mb-16">
                          <li>2019</li>
                          <li className="sec">18+</li>
                          <li>4 Seasons</li>
                          <li>Anime</li>
                        </ul>
                        <p className=" sm color-medium-gray">
                          Sentenced to death, ninja Gabimaru the Hollow finds
                          himself apathetic.{" "}
                        </p>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#videoModal"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Start */}
        <div className="page-content">
          {/* Categories Area Start */}
          <section className="categories p-40">
            <div className="container-fluid">
              <div className="row">
                <div style={{fontSize:"28px", fontWeight:"bold", margin:"20px"}}>Anime Genres</div>
                {animegenres.map((value, index) => {
                  return (
                    <>
                      <div className="col-xxl-3 col-sm-6 mb-30">
                        <a href={value?.url} className="categorie-item">
                          <img src={`assets/media/categories/Img-${index+1}.png`} alt />
                          <div className="content">
                            <h2 className="h-36 mb-1 color-white">{value.name}</h2>
                            <span className="h-20 color-medium-gray">
                              {value.count}+Animes
                            </span>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}

                 <div style={{fontSize:"28px", fontWeight:"bold", margin:"20px"}}>Manga Genres</div>
                 {mangagenres.map((value, index) => {
                  return (
                    <>
                      <div className="col-xxl-3 col-sm-6 mb-30">
                        <a href={value?.url} className="categorie-item">
                          <img src={`assets/media/categories/Img-${index+1}.png`} alt />
                          <div className="content">
                            <h2 className="h-36 mb-1 color-white">{value.name}</h2>
                            <span className="h-20 color-medium-gray">
                              {value.count}+Animes
                            </span>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          {/* Categories Area End */}
          {/* trending Area Start */}
          <section className="trending p-40">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Trending Shows</h2>
                <a href="anime-listing.html" className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </a>
              </div>
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                  <div className="card">
                    <div className="img-block mb-30">
                      <img src="assets/media/anime-card/img-3.png" alt />
                      <a href="movie-detail.html" className="cus-btn light">
                        Stream Now
                        <i className="far fa-play" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="list">1</div>
                      <div className="name">
                        <h4 className="h-24 color-white bold">
                          Hell’s Paradise
                        </h4>
                        <h6 className="h-20 color-medium-gray ">Action</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                  <div className="card">
                    <div className="img-block mb-30">
                      <img src="assets/media/anime-card/img-4.png" alt />
                      <a href="movie-detail.html" className="cus-btn light">
                        Stream Now
                        <i className="far fa-play" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="list">2</div>
                      <div className="name">
                        <h4 className="h-24 color-white bold">One Piece</h4>
                        <h6 className="h-20 color-medium-gray ">Comedy</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-sm-0">
                  <div className="card">
                    <div className="img-block mb-30">
                      <img src="assets/media/anime-card/img-5.png" alt />
                      <a href="movie-detail.html" className="cus-btn light">
                        Stream Now
                        <i className="far fa-play" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="list">3</div>
                      <div className="name">
                        <h4 className="h-24 color-white bold">86 Eighty Six</h4>
                        <h6 className="h-20 color-medium-gray ">Romance</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-sm-6 d-xxl-block d-xl-none d-lg-block">
                  <div className="card">
                    <div className="img-block mb-30">
                      <img src="assets/media/anime-card/img-6.png" alt />
                      <a href="movie-detail.html" className="cus-btn light">
                        Stream Now
                        <i className="far fa-play" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="list">4</div>
                      <div className="name">
                        <h4 className="h-24 color-white bold">
                          Darling In The Franxx
                        </h4>
                        <h6 className="h-20 color-medium-gray ">Fantasy</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* treading Area End */}
          {/* Continue Area Start */}
          <section className="continue p-40 pb-0">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Continue Watching</h2>
                <a href="anime-listing.html" className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </a>
              </div>
              <div className="row">
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-7.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        Hell’s Paradise
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-8.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        Fate Stay Night{" "}
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-9.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        Steins Gate
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-10.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        Black Bullet
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-11.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        Chainsawman
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-6">
                  <div className="item mb-40">
                    <img src="assets/media/anime-card/img-12.png" alt />
                    <div className="content">
                      <h4 className="h-24 color-white bold mb-12">
                        My Hero Academia
                      </h4>
                      <ul className="tag unstyled">
                        <li>
                          <svg
                            width={16}
                            height={15}
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.5C15.0938 0.5 16 1.40625 16 2.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13.5312 1.5H10.1875L7.1875 4.5H10.5312L13.5312 1.5ZM8.78125 1.5H5.4375L2.4375 4.5H5.78125L8.78125 1.5ZM1 2.5V4.5H1.03125L4.03125 1.5H2C1.4375 1.5 1 1.96875 1 2.5ZM15 12.5V5.5H1V12.5C1 13.0625 1.4375 13.5 2 13.5H14C14.5312 13.5 15 13.0625 15 12.5ZM15 4.5V2.5C15 2.21875 14.875 1.96875 14.6562 1.78125L11.9375 4.5H15ZM6.40625 12.4062C6.15625 12.25 6 11.9688 6 11.6562V7.34375C6 7.0625 6.15625 6.78125 6.40625 6.625C6.6875 6.46875 7 6.46875 7.28125 6.65625L10.5938 8.78125C10.8438 8.9375 11 9.1875 11 9.5C11 9.8125 10.8438 10.0625 10.5938 10.2188L7.28125 12.375C7.125 12.4688 6.96875 12.5 6.8125 12.5C6.6875 12.5 6.53125 12.4688 6.40625 12.4062ZM7 7.65625V11.375L9.84375 9.5L7 7.65625Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Season 02</p>
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 2.5C17.5312 2.5 18 2.96875 18 3.5C18 4.0625 17.5312 4.5 17 4.5C16.9375 4.5 16.875 4.5 16.8125 4.46875L15.2812 12.875C15.125 13.8125 14.2812 14.5 13.3125 14.5H4.65625C3.6875 14.5 2.84375 13.8125 2.6875 12.875L1.15625 4.46875C1.09375 4.5 1.03125 4.5 1 4.5C0.4375 4.5 0 4.0625 0 3.5C0 2.96875 0.4375 2.5 1 2.5C1.53125 2.5 2 2.96875 2 3.5C2 3.75 1.875 3.96875 1.75 4.125L5.03125 6.75C5.21875 6.90625 5.4375 6.96875 5.65625 6.96875C6 6.96875 6.375 6.75 6.53125 6.40625L8.53125 2.40625C8.21875 2.25 8 1.90625 8 1.5C8 0.96875 8.4375 0.5 9 0.5C9.53125 0.5 10 0.96875 10 1.5C10 1.90625 9.75 2.25 9.4375 2.40625L11.4375 6.40625C11.5938 6.75 11.9688 6.96875 12.3125 6.96875C12.5312 6.96875 12.75 6.90625 12.9375 6.75L16.2188 4.125C16.0938 3.96875 16 3.75 16 3.5C16 2.96875 16.4375 2.5 17 2.5ZM14.3125 12.6875L15.5312 5.96875L13.5625 7.53125C13.2188 7.8125 12.7812 7.96875 12.3125 7.96875C11.5625 7.96875 10.875 7.53125 10.5312 6.84375L9 3.75L7.4375 6.84375C7.09375 7.53125 6.40625 7.96875 5.65625 7.96875C5.1875 7.96875 4.75 7.8125 4.40625 7.53125L2.4375 5.96875L3.65625 12.6875C3.75 13.1562 4.15625 13.5 4.65625 13.5H13.3125C13.8125 13.5 14.2188 13.1562 14.3125 12.6875Z"
                              fill="#9EA2A8"
                            />
                          </svg>
                          <p className="color-medium-gray">Episode 02</p>
                        </li>
                      </ul>
                      <div className="btn-block">
                        <a
                          href="movie-detail.html"
                          className="cus-btn primary space"
                        >
                          <i className="far fa-play" />
                          Play
                        </a>
                        <div className="h-20 color-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM12 2.5C13.3132 2.5 14.6136 2.75866 15.8268 3.2612C17.0401 3.76375 18.1425 4.50035 19.0711 5.42893C19.9997 6.35752 20.7362 7.45991 21.2388 8.67317C21.7413 9.88642 22 11.1868 22 12.5C22 15.1522 20.9464 17.6957 19.0711 19.5711C17.1957 21.4464 14.6522 22.5 12 22.5C6.47 22.5 2 18 2 12.5C2 9.84784 3.05357 7.3043 4.92893 5.42893C6.8043 3.55357 9.34784 2.5 12 2.5ZM12.5 7.5V12.75L17 15.42L16.25 16.65L11 13.5V7.5H12.5Z"
                              fill="#F8F8FF"
                            />
                          </svg>
                          24:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Continue Area End */}
          {/* Recently Area Start */}

          <RecentlyReleased />
          {/* Recently Area Start */}
          {/* Coming Soon Area Start */}
         
          
      
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
