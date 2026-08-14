

import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Link } from "react-router-dom";

function Manga() {
  let [topmanga, setTopManga] = useState([]);
  let [mangalist, setMangaList] = useState([]);

  let [mangaLoading, setMangaLoading] = useState(true);
  let [topMangaLoading, setTopMangaLoading] = useState(true);

  // ================================
  // FETCH TOP MANGA
  // ================================

  async function FetchTopManga(retryCount = 0) {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/manga"
      );

      if (!response.ok) {
        throw new Error(
          `Top Manga API Error: ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Top Manga API Response:", data);

      setTopManga(data?.data || []);
    } catch (error) {
      console.error(
        `Top Manga Fetch Error - Attempt ${retryCount + 1}:`,
        error
      );

      // Retry maximum 3 times
      if (retryCount < 2) {
        setTimeout(() => {
          FetchTopManga(retryCount + 1);
        }, 3000);
      } else {
        setTopManga([]);
      }
    } finally {
      setTopMangaLoading(false);
    }
  }

  // ================================
  // FETCH MANGA LIST
  // ================================

  async function FetchMangaList(retryCount = 0) {
    try {
      setMangaLoading(true);

      const response = await fetch(
        "https://api.jikan.moe/v4/manga"
      );

      if (!response.ok) {
        throw new Error(
          `Manga API Error: ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Manga List API Response:", data);

      setMangaList(data?.data || []);
    } catch (error) {
      console.error(
        `Manga List Fetch Error - Attempt ${retryCount + 1}:`,
        error
      );

      // Retry maximum 3 times
      if (retryCount < 2) {
        setTimeout(() => {
          FetchMangaList(retryCount + 1);
        }, 3000);
      } else {
        setMangaList([]);
      }
    } finally {
      setMangaLoading(false);
    }
  }

  // ================================
  // USE EFFECT
  // ================================

  useEffect(() => {
    FetchTopManga();
    FetchMangaList();
  }, []);

  // ================================
  // JSX
  // ================================

  return (
    <div
      id="main-wrapper"
      className="main-wrapper overflow-hidden"
    >
      <Header />

      <div className="page-content">

        {/* =========================================
            MANGA LISTING AREA START
        ========================================= */}

        <section className="trending p-40">

          <div className="container-fluid">

            <div className="row">

              {/* =====================================
                  LEFT SIDE - TOP RATED MANGA
              ===================================== */}

              <div className="col-xxl-3">

                <div className="row">

                  <div className="col-xxl-12 col-xl-8">

                    <div className="top-anime mb-12">

                      <h2 className="h-30 bold color-white mb-12">
                        Top Rated Manga
                      </h2>

                      <p className="sec sm mb-24">
                        Based on your filter
                      </p>

                      <div className="row">

                        {topMangaLoading ? (

                          <p className="color-white">
                            Loading Top Manga...
                          </p>

                        ) : topmanga.length > 0 ? (

                          topmanga.map((value, index) => {

                            return (

                              <div
                                className="col-xxl-12 col-md-6"
                                key={
                                  value.mal_id || index
                                }
                              >

                                <Link
                                  to={`/topmangadetails/${value.mal_id}`}
                                  className="anime-card mb-12"
                                >

                                  <img
                                    src={
                                      value.images?.jpg
                                        ?.large_image_url
                                    }
                                    style={{
                                      width: "80px",
                                      objectFit: "cover",
                                    }}
                                    alt={
                                      value.title || "Manga"
                                    }
                                  />

                                  <div className="text-block">

                                    <div className="sm-title">

                                      <h6 className="color-white">

                                        {value.title_english ||
                                          value.title ||
                                          "Unknown Manga"}

                                      </h6>

                                    </div>

                                    <ul className="tag unstyled">

                                      <li>
                                        {value.genres?.[0]
                                          ?.name || ""}
                                      </li>

                                      <li>
                                        {value.published
                                          ?.prop?.from
                                          ?.year || ""}
                                      </li>

                                      <li>
                                        {value.chapters
                                          ? "CH-" +
                                            value.chapters
                                          : ""}
                                      </li>

                                      <li className="icon">
                                        <i className="fas fa-star" />
                                      </li>

                                      <li>
                                        {value.score || ""}
                                      </li>

                                    </ul>

                                  </div>

                                </Link>

                              </div>

                            );

                          })

                        ) : (

                          <p className="color-white">
                            Top Manga could not be loaded.
                          </p>

                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* =====================================
                  RIGHT SIDE - MANGA LIST
              ===================================== */}

              <div className="col-xxl-9">

                <p className="sm-title mb-40">
                  154 items
                </p>

                <div className="row">

                  {mangaLoading ? (

                    <div className="col-12">

                      <p className="color-white">
                        Loading Manga...
                      </p>

                    </div>

                  ) : mangalist.length > 0 ? (

                    mangalist.map((value, index) => {

                      return (

                        <div
                          className="col-md-4 col-sm-6 mb-40"
                          key={
                            value.mal_id || index
                          }
                        >

                          <div className="card st-2 m-0">

                            {/* IMAGE + STREAM NOW */}

                            <div className="img-block mb-20">

                              <img
                                src={
                                  value.images?.jpg
                                    ?.large_image_url
                                }
                                style={{
                                  width: "400px",
                                  objectFit: "cover",
                                }}
                                alt={
                                  value.title || "Manga"
                                }
                              />

                              <Link
                                to={`/mangadetails/${value.mal_id}`}
                                className="cus-btn light"
                              >

                                Stream Now

                                <i className="far fa-play" />

                              </Link>

                            </div>


                            {/* CONTENT */}

                            <div className="content">

                              <h4 className="h-24 color-white bold">

                                {value.title_english ||
                                  value.title ||
                                  "Unknown Manga"}

                              </h4>


                              <ul className="tag unstyled">

                                <li>
                                  {value.genres?.[0]
                                    ?.name || ""}
                                </li>

                                <li>
                                  {value.published
                                    ?.prop?.from
                                    ?.year || ""}
                                </li>

                                <li>
                                  {value.chapters
                                    ? "CH-" +
                                      value.chapters
                                    : ""}
                                </li>

                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>

                                <li>
                                  {value.score || ""}
                                </li>

                              </ul>

                            </div>

                          </div>

                        </div>

                      );

                    })

                  ) : (

                    <div className="col-12">

                      <p className="color-white">
                        Manga list could not be loaded.
                      </p>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Manga Listing Area END */}

      </div>

      {/* Main Content End */}

      <Footer />

    </div>
  );
}

export default Manga;