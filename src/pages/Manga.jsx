import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function Manga() {
  let [topmanga, setTopManga] = useState([]);
  let [mangalist, setMangaList] = useState([]);

  async function FetchTopManga() {
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

  async function FetchMangaList() {
    fetch("https://api.jikan.moe/v4/manga")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMangaList(data["data"]);
        console.log(mangalist);
      });
  }

  useEffect(() => {
    FetchTopManga();
    FetchMangaList();
  }, []);

  return (
    <div id="main-wrapper" className="main-wrapper overflow-hidden">
      <Header />
      <div className="page-content">
        {/* Anime Listing Area Start */}
        <section className="trending p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3">
                <div className="row">
                  <div className="col-xxl-12 col-xl-8">
                    <div className="top-anime mb-12">
                      <h2 className="h-30 bold color-white mb-12">
                        Top Rated Anime
                      </h2>
                      <p className="sec sm mb-24">Based on your filter</p>
                      <div className="row">
                        {topmanga.map((value, index) => {
                          return (
                            <>
                              <div className="col-xxl-12 col-md-6">
                                <a
                                  href={`/topmangadetails/${value.mal_id}`}
                                  className="anime-card mb-12"
                                >
                                  <img
                                    src={value.images.jpg.large_image_url}
                                    style={{
                                      width: "80px",
                                      objectFit: "cover",
                                    }}
                                    alt
                                  />
                                  <div className="text-block">
                                    <div className="sm-title">
                                      <h6 className="color-white">
                                        {value.title_english}
                                      </h6>
                                    </div>
                                    <ul className="tag unstyled">
                                      <li>{value.genres[0]?.name}</li>
                                      <li>
                                        {value.published.prop.from.year
                                          }
                                      </li>
                                      <li>
                                        {value.episodes?"EP-"+value.episodes:""}
                                      </li>
                                      <li className="icon">
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>{value.score}</li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9">
                <p className="sm-title mb-40">154 items</p>
                <div className="row">
                  {mangalist.map((value, index) => {
                    return (
                      <>
                        <div className="col-md-4 col-sm-6 mb-40">
                          <div className="card st-2 m-0">
                            <div className="img-block mb-20">
                              <img
                                src={value.images.jpg.large_image_url}
                                style={{ width: "400px", objectFit: "cover" }}
                                alt
                              />
                              <a
                                href={`/mangadetails/${value.mal_id}`}
                                className="cus-btn light"
                              >
                                Stream Now
                                <i className="far fa-play" />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="h-24 color-white bold">
                                {value.title_english}
                              </h4>
                              <ul className="tag unstyled">
                                <li>{value.genres[0]?.name}</li>
                                <li>
                                  {value.published.prop.from.year}
                                </li>
                                <li>
                                  {value.episodes?"EP-"+value.episodes:""}
                                </li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>{value.score}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Anime Listing Area end */}
      </div>
      {/* Main Content End */}
      <Footer />
    </div>
  );
}

export default Manga;
