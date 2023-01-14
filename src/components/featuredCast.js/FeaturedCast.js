import './featuredCast.scss';
const FeaturedCast = ({image, title}) => {
return (
    <div className="featured-cast">
        <img src={image} alt="cast"/>
        <h4>{title}</h4>
    </div>
)
};

export default FeaturedCast;