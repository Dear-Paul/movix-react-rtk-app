import './exclusiveVideo.scss';
import exclusivePlay from '../../assets/exclusive-play.svg';
const ExclusiveVideo = (video) => {
    
    return (
        <div className="exclusive-video">
            <div className='video-image'>
            <img src={`http://image.tmdb.org/t/p/w500/${video.video.poster_path}`} alt='poster' />
                <div className='play'>
                    <img src={exclusivePlay} alt='play-video'/>
                </div>
            </div>
            <h3>{video.video.title}</h3>
        </div>
    )
}
export default ExclusiveVideo;