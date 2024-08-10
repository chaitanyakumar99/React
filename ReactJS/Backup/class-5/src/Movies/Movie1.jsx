function Movie() {
    let movie_name = "Maharaja"
    let hero = "VS"
    let story = "none";
    let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97vf4WWOAP8HCNKY9u6LZVAU6x_Rt12w__g&s"
    return <div>
        <h3>Movie Component</h3>
        <hr />
        <h3>Movie Name:{movie_name}</h3>
        <h3>Movie Name:{hero}</h3>
        <p>Store:{story}</p>
        <img src={image} alt="" />
    </div>
}

export default Movie