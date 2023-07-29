let searchForm = document.querySelector("#searchForm")
let removeMoviesBtn = document.querySelector("#removeMovies")
let resContainer = document.querySelector("#moviesResults")
let resName = document.querySelector("#movieName")
let resRelease = document.querySelector("#release")
let resEnded = document.querySelector("#ended")
let resRating = document.querySelector("#rating")




searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the value entered in the form input field
    let searchInputValue = e.target.elements.inputfield.value;
   
    getShowInfo(searchInputValue)
});

removeMoviesBtn.addEventListener("click", () => removeMovies())




const getShowInfo = async(showTitle) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${showTitle}`)
    res.data.forEach(e => appendMovies(e.show.name,e.show.premiered,e.show.ended, e.show.rating.average ))
    //appendMovies(res.data.name,res.data.premiered,res.data.ended, res.data.rating.average )
    }

function appendMovies(name,release,ended,rating){
    let movieContainer = document.createElement("div")
    movieContainer.classList.add("movieContainer")
    let first = document.createElement("h3")
    first.innerText = name
    let second = document.createElement("h3")
    second.innerText = release
    let third = document.createElement("h3")
    if(ended == null){
        third.innerText = "The Show is still On-Going"
    } else {
    third.innerText = ended}
    let fourth = document.createElement("h3")
    if(rating == null){
        fourth.innerText = "The show has no rating yet"
        
    } else {
    fourth.innerText = rating
}
    resContainer.append(movieContainer)
    movieContainer.append(first)
    movieContainer.append(second)
    movieContainer.append(third)
    movieContainer.append(fourth)

}

function removeMovies(){
    let allMovies = document.querySelectorAll(".movieContainer")
    allMovies.forEach(movie => movie.remove())
}

