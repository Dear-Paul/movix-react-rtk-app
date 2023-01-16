import './withArrow.scss';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeftt from '../../assets/arrow-left.svg';
const WithArrow = ({ children, onNextClick, onPreviousClick }) => {
    return (
        <div className='arrow-container'>
            <div className='arrow-left' onClick={onPreviousClick}>
                <img src={arrowLeftt} alt='left arrow' />
            </div>
            {children}
            <div className='arrow-right' onClick={onNextClick}>
                <img src={arrowRight} alt='right arrow' />
            </div>
        </div>
    )
}

export default WithArrow