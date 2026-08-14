import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'

function MangaDetails() {

    let id = useLocation().pathname.split("/")[2];// 0 index- blank. 1st index pe animidetails, 2nd index pe id milegi
    
      let [mangadetails, setMangaDetials] = useState([]);
      let [genres, setGenres] = useState([])
    
       async function FetchMangaDetails() {
        fetch(`https://api.jikan.moe/v4/manga/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setMangaDetials(data["data"]);
            setGenres(data["data"]["genres"])
            
          });
      }
    
      console.log(mangadetails);
    
      useEffect(() => {
        FetchMangaDetails(); 
        }, []);


  return (
    <div>
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Header/>
  {/* Hero Banner start */}
  <div className="inner-banner p-40">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img src={mangadetails.images?.jpg.large_image_url} style={{ margin:"0 auto", width:"50%", display:"flex", objectFit:"cover"}} alt=''/>
        </div>
      </div>
    </div>
  </div>
  {/* Main Content Start */}
  <div className="page-content">
    {/* Movie Detail Area Start */}
    <section className="movie-detail p-40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-9 mb-lg-0 mb-24">
            <div className="name-rating mb-24">
              <h2 className="h-30 bold color-white ">{mangadetails.title_english}</h2>
              <div className="rating">
                <span className="h-24 color-white">
                  {mangadetails?.rating}
                </span>
                <span className="h-24 color-white fw-bold" >{mangadetails.rank?"Rank :- "+ mangadetails.rank:""}</span>
              </div>
            </div>
            <ul className="tag unstyled mb-24">
               <li>
                      {mangadetails?.year || mangadetails?.published?.prop?.from?.year}
                    </li>
              <li>{mangadetails.type}</li>
              
            </ul>
            <h5 className="h-24 color-white mb-16 bold">About the Story</h5>
            <p className="sec color-white mb-24" style={{fontSize:"14px"}}>{mangadetails.background}
            </p>
            <p className="sec color-white mb-16"><span className="color-medium-gray">Language:</span> Japanese, English, English (India), Español (América Latina)</p>
            <p className="sec color-white mb-30"><span className="color-medium-gray">Subtitles:</span> Japanese, English</p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#videoModal" className="cus-btn primary">
              <i className="far fa-play" />
              Play
            </a>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-3">
            <div className="about">
              <h3 className="h-30 bold color-white mb-24">About</h3>
              <p className="sec color-white mb-8"><span className="color-medium-gray">Type:</span>{mangadetails.type}</p>
              <p className="sec color-white mb-8"><span className="color-medium-gray">Score:</span>{mangadetails.score}</p>
              <p className="sec color-white mb-8"><span className="color-medium-gray">Date published:  </span> {mangadetails?.year || mangadetails?.published?.from}</p>
              <p className="sec color-white mb-8"><span className="color-medium-gray">Status:</span>{mangadetails.status}</p>
              <p className="sec color-white mb-8"><span className="color-medium-gray">Country:</span> Japan</p>
              <div className="categorie">
                <p className="sec color-medium-gray">Genre:</p>
                <ul className="categorie-list unstyled">
                  {genres.map((value,index)=>{

                    return(
                      <>
                      <li><a href="#">{value.name}</a></li>
                      </> 
                    )
                  })}
                  
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="line" />
      </div>
    </section>
    {/* Movie Detail Area end */}
   
  </div>
  {/* Main Content End */}
  <Footer/>
</div>




    </div>
  )
}

export default MangaDetails