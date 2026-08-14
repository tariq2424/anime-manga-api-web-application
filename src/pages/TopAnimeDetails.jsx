import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'

function Topanimedetails() {

  let id = useLocation().pathname.split("/")[2];

  let [topanimedetails, setTopAnimeDetials] = useState(null);

  async function FetchTopanimedetails() {
    try {
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);
      let data = await response.json();

      let found = data.data.find(item => item.mal_id == id);
      setTopAnimeDetials(found);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    FetchTopanimedetails(); 
  }, []);

  return (
    <div>

      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Header/>

        {/* Hero Banner */}
        <div className="inner-banner p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <img 
                  src={topanimedetails?.images?.jpg?.large_image_url} 
                  style={{ margin:"0 auto", width:"50%", display:"flex", objectFit:"cover"}} 
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="page-content">
          <section className="movie-detail p-40">
            <div className="container-fluid">
              <div className="row">

                {/* LEFT */}
                <div className="col-xxl-8 col-xl-8 col-lg-9 mb-24">

                  <div className="mb-24">
                    <h2 className="h-30 bold color-white">
                      {topanimedetails?.title_english || topanimedetails?.title}
                    </h2>

                    <div className="d-flex gap-3 mt-2">
                      <span className="badge-custom">
                        {topanimedetails?.rating}
                      </span>

                      <span className="fw-bold color-white">
                        Rank :- {topanimedetails?.rank}
                      </span>
                    </div>
                  </div>

                  {/* TAGS */}
                  <ul className="d-flex flex-wrap gap-2 mb-24 tag unstyled " style={{listStyle:"none"}}>
                    <li className="badge-custom ">{topanimedetails?.rating}</li>
                    <li className="badge-custom">HD</li>
                    <li className="badge-custom">
                      {topanimedetails?.year || topanimedetails?.aired?.prop?.from?.year}
                    </li>
                    <li className="badge-custom">{topanimedetails?.type}</li>
                    <li className="badge-custom">{topanimedetails?.duration}</li>
                  </ul>

                  <h5 className="h-24 color-white mb-16 bold">About the Story</h5>

                  <p className="color-white mb-24" style={{fontSize:"14px"}}>
                    {topanimedetails?.background || topanimedetails?.synopsis}
                  </p>

                  <p className="color-white mb-16">
                    <span className="color-medium-gray">Language:</span> Japanese, English
                  </p>

                  <p className="color-white mb-30">
                    <span className="color-medium-gray">Subtitles:</span> English
                  </p>

                  <button className="cus-btn primary">
                    ▶ Play
                  </button>

                </div>

                {/* RIGHT */}
                <div className="col-xxl-3 col-xl-4 col-lg-3">

                  <div className="about">
                    <h3 className="h-30 bold color-white mb-24">About</h3>

                    <p><span className="color-medium-gray">Type:</span> {topanimedetails?.type}</p>
                    <p><span className="color-medium-gray">Score:</span> {topanimedetails?.score}</p>
                    <p><span className="color-medium-gray">Episodes:</span> {topanimedetails?.episodes}</p>
                    <p><span className="color-medium-gray">Status:</span> {topanimedetails?.status}</p>
                    <p><span className="color-medium-gray">Duration:</span> {topanimedetails?.duration}</p>

                    {/* GENRES */}
                    <div className="mt-3 categorie">
                      <p className="color-medium-gray mb-2">Genre:</p>

                      <div className="d-flex flex-wrap gap-2 ">
                        {topanimedetails?.genres?.map((value,index)=>(
                          <span key={index} className=" badge border p-2">
                            {value.name}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="line" />
            </div>
          </section>
        </div>

        <Footer/>
      </div>

    </div>
  )
}

export default Topanimedetails