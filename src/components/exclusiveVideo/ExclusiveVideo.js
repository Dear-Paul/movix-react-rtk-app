import './exclusiveVideo.scss';
import exclusivePlay from '../../assets/exclusive-play.svg';
const ExclusiveVideo = ({image, title}) => {
    return (
        <div className="exclusive-video">
            <div className='video-image'>
                <img src={image} alt="thumbnail"/>
                <div className='play'>
                    <img src={exclusivePlay} alt='play-video'/>
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    )
}
export default ExclusiveVideo;