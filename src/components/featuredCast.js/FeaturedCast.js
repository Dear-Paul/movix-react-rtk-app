import './featuredCast.scss';
const FeaturedCast = (cast) => {
return (
    <div className="featured-cast">
       <img src={`http://image.tmdb.org/t/p/w500/${cast.cast.profile_path}`} alt='test' />
        <h4>{cast.cast.name}</h4>
    </div>
)
};

export default FeaturedCast;