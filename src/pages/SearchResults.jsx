import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header';
import Footer from '../common/Footer';

function SearchResults() {

    // URL se query + type nikaal
  let params = new URLSearchParams(useLocation().search);

  let q = params.get("q");
  let type = params.get("type") || "anime";

  let [query, setQuery]= useState("");
  let [searchdata, setSearchData] = useState([]);

  // Dynamic API (anime + manga)
  async function FetchData() {
    try {
      let res = await fetch(`https://api.jikan.moe/v4/${type}?q=${query}`);
      let data = await res.json();

      setSearchData(data.data);
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  //  query set
  useEffect(()=>{
    if(q){
      setQuery(q);
    }
  },[q])

  //  API call
  useEffect(()=>{
    if(query && type){
      FetchData();
    }
  },[query, type])

  return (

    <div>
  <div id="main-wrapper" className="main-wrapper overflow-hidden">
    <Header/>
   
    <div className="page-content">
      {/* Anime Listing Area Start */}
      <section className="trending p-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <p className="sm-title mb-40">154 items</p>
              <div className="row">

                {searchdata.map((value,index)=>{
                    return(
                        <>
                 <div className="col-md-3 col-sm-6 mb-40">
                  <div className="card st-2 m-0">
                    <div className="img-block mb-20">
                      <img src={value.images.jpg.large_image_url} alt />
                      <a href="movie-detail.html" className="cus-btn light">
                        Stream Now
                        <i className="far fa-play" />
                      </a>
                    </div>
                    <div className="content">
                      <h4 className="h-24 color-white bold">{value.title_english}</h4>
                      <ul className="tag unstyled">
                        <li>{value.genres[0]?.name}</li>
                        <li>{value.year?+value.aired.prop.from.year:""}</li>
                        <li>{value.episodes?"EP-"+value.episodes:""}</li>
                        <li className="icon"><i className="fas fa-star" /></li>
                        <li>{value.score}</li>
                       
                      </ul>
                    </div>
                  </div>     
                </div>
                        </>
                    )
                })}
              
                
              
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* Anime Listing Area end */}
    </div>
    {/* Main Content End */}
    <Footer/>
  </div>
</div>

  )
}

export default SearchResults



// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Header from '../common/Header';
// import Footer from '../common/Footer';

// function SearchResults() {

//     let q = useLocation().search.split("=")[1];// Use of uselocation :- Extract the data from the url....
//     let [query, setQuery]= useState("");

//     let [searchdata, setSearchData] = useState([]);


//     async function FetchAnime() {
//         fetch(`https://api.jikan.moe/v4/anime?q=${query}`).then((response)=>{
//             return response.json();
//         }).then((data)=>{
//             setSearchData(data["data"]);
//             console.log(data);
//         })
        
//     }

//     async function FetchManga() {
//         fetch(`https://api.jikan.moe/v4/manga?q=${query}`).then((response)=>{
//             return response.json();
//         }).then((data)=>{
//             setSearchData(data["data"]);
//             console.log(data);
//         })
        
//     }

//     useEffect(()=>{

//         if(q){
//             setQuery(q);
//         }

//     },[q])

//     useEffect(()=>{
//         if(query){
//             setQuery(query);
//             FetchAnime();
//             FetchManga();

//         }
//     },[query])

//   return (

//     <div>
//   <div id="main-wrapper" className="main-wrapper overflow-hidden">
//     <Header/>
   
//     <div className="page-content">
//       {/* Anime Listing Area Start */}
//       <section className="trending p-40">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-xxl-12">
//               <p className="sm-title mb-40">154 items</p>
//               <div className="row">

//                 {searchdata.map((value,index)=>{
//                     return(
//                         <>
//                  <div className="col-md-3 col-sm-6 mb-40">
//                   <div className="card st-2 m-0">
//                     <div className="img-block mb-20">
//                       <img src={value.images.jpg.large_image_url} alt />
//                       <a href="movie-detail.html" className="cus-btn light">
//                         Stream Now
//                         <i className="far fa-play" />
//                       </a>
//                     </div>
//                     <div className="content">
//                       <h4 className="h-24 color-white bold">{value.title_english}</h4>
//                       <ul className="tag unstyled">
//                         <li>{value.genres[0]?.name}</li>
//                         <li>{value.year?+value.aired.prop.from.year:""}</li>
//                         <li>{value.episodes?"EP-"+value.episodes:""}</li>
//                         <li className="icon"><i className="fas fa-star" /></li>
//                         <li>{value.score}</li>
                       
//                       </ul>
//                     </div>
//                   </div>     
//                 </div>
//                         </>
//                     )
//                 })}
              
                
              
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Anime Listing Area end */}
//     </div>
//     {/* Main Content End */}
//     <Footer/>
//   </div>
// </div>

//   )
// }

// export default SearchResults