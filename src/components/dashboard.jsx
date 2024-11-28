
import { useState, useEffect } from "react";
import "../index.css";
import {useNavigate} from "react-router-dom"

function Dashboard() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalpages, setTotalpages] = useState(0);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=movies&apikey=a45cedb`)
      .then(response => response.json())
      .then(value1 => {
        setData2(value1.Search);
      });

    fetch(`https://www.omdbapi.com/?s=series&apikey=a45cedb`)
      .then(response => response.json())
      .then(value3 => {
        setData3(value3.Search);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const page=document.querySelector(".page")
    page.style.display="flex"
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=a45cedb`)
      .then(response => response.json())
      .then(value => {
        setData(value.Search || []);
        console.log(value)
        setTotalpages(Math.ceil((value.Search || []).length / 5)); 
        setCurrentpage(1); 
      });
  };
  const navigate=useNavigate()
  
  const navigation=(movieId)=>{
    navigate("/MovieDetail",{state:{id:movieId}})
     }
  const loginpage=()=>{
    navigate("/login",)
     }
  
  const handlePageChange = (newPage) => {
    setCurrentpage(newPage); 
  };

  const handleNextClick = () => {
    if (currentpage < totalpages) {
      setCurrentpage(currentpage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };
  const backtosearch=()=>{
    const page=document.querySelector(".page")
    page.style.display="none"
   }


  const preDisabled = currentpage === 1;
  const nextDisabled = currentpage === totalpages;
  const itemsPerPage = 5;
  const startIndex = (currentpage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex); // Pagination 

  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center p-4 bg-red-700 text-white font-serif">
        <h1>Movie Jet</h1>
        <button onClick={() => loginpage()}>Login</button>
      </div>

      <img
        src="https://wallpapercave.com/wp/wp1945939.jpg"
        alt="Background"
        className="img"
      />

      <div className="p-10">
        <form onSubmit={submitHandler} className="flex justify-center mt-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            placeholder="Search for movies"
          />
          <button
            type="submit"
            className="ml-2 px-2 py-2 bg-slate-900 text-white rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
      {/* search */}
      <div className="flex flex-col gap-5 justify-items-center h-full w-full p-5 page">     
      
        <div className="flex justify-items-center gap-5  p-4 py-4 h-full w-full page1  responsiveness">
        
            {itemsToDisplay && itemsToDisplay.map((movie) => (
              
              <div key={movie.imdbID} className="divtag rounded-md" onClick={() => navigation(movie.imdbID)} >
                {/* const id={movie.imdbID} */}
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="imgtag"
                  
                />
                <h1 className="line-clamp-1 mt-2">{movie.Title}</h1>
              </div>
            ))}
        </div>    
        {/*pagination*/}
        <div className="flex  gap-4 h-10">
            <button onClick={handlePrevClick} disabled={preDisabled} className="bg-slate-900 border-spacing-2 rounded-sm p-1 text-slate-50">Prev</button>
            {
              Array.from({ length: totalpages }, (j, i) => (
                <button onClick={() => handlePageChange(i + 1)} key={i} disabled={i + 1 === currentpage} className="bg-slate-400  rounded-sm p-2 text-slate-50 ">
                  {i + 1}
                </button>
              ))
            }
            <button onClick={handleNextClick} disabled={nextDisabled} className="bg-slate-900 border-spacing-2 rounded-sm p-1 text-slate-50">Next</button>
        </div>
        <button onClick={backtosearch} className="bg-black text-white p-1 rounded-sm back">Back</button>
      
      </div>
 

      {/* Movies*/}
      <h1 className="text-center text-4xl mt-6 pb-5">Movies</h1>
      <div className="grid grid-cols-5 w-22 h-22  justify-center align-middle p-4 py-4 h-full w-full responsiveness ">
        {data2 && data2.map((movie) => (
          <div key={movie.imdbID} className="divtag rounded-md" onClick={() => navigation(movie.imdbID)}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="imgtag"
            
            />
            <h1 className="line-clamp-1 mt-2">{movie.Title}</h1>
          </div>
        ))}
      </div>

      {/* Series */}
      <h1 className="text-center text-4xl mt-6 pb-5">Series</h1>
      <div className="grid grid-cols-5 gap-5  p-2.5 justify-center align-center h-full w-full mb-4 responsiveness ">
        {data3 && data3.map((movie) => (
          <div key={movie.imdbID} className="divtag rounded-md" onClick={() => navigation(movie.imdbID)}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="imgtag"

            />
            <h1 className="line-clamp-1 mt-2">{movie.Title}</h1>
            </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-sm text-slate-100 bg-black">
          <div className="flex flex-col p-5 gap-5" >
            <p>Questions? Call <a href="tel:+008009191694" >00-800-9191-1694</a></p>
            <a href="#" >Investors</a>
            <a href="#" >Privacy</a>
            <a href="#" >Speed Test</a>
          </div>
          <div className="flex flex-col p-5 gap-5">
            <a href="#">Help Center</a>
            <a href="#" >Jobs</a>
            <a href="#" >Cookies Preferences</a>
            <a href="#" >Legal Notice</a>
          </div>
          <div className="flex flex-col p-5 gap-5">
            <a href="#" >Account</a>
            <a href="#" >Ways to Watch</a>
            <a href="#" >Corporate Information</a>
            <a href="#" >Only on Netflix</a>
          </div>
          <div className="flex flex-col p-5 gap-5">
            <a href="#" >Media Center</a>
            <a href="#" >Terms of Use</a>
            <a href="#" >Contact Us</a>
            <a href="#" >Reviews</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


