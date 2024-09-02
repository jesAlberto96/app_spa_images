import { useLikes } from '../../hooks/index';
import '../../styles/ShopCard.css'

export const ShopCard = ({
    id,
    title,
    main_attachment,
    author,
    price,
}) => {
    const { likeImages, likes, decrementLikes } = useLikes('/api/images');

    return (
        <div className="content-products_item animate__animated animate__fadeIn">
            <div className='content-products_item_price-tag'><span>{ price }.00 <small>&euro;</small></span></div>
            <div className="content-products_item__logo">
                <img src={ main_attachment.big } />
            </div>
            <div className='content-products_item__info'>
                <p>{ title }</p>
                <small><span>By</span> { author }</small>
            </div>
            <div className='content-products_item__actions-desktop'>
                <div className='like'>
                    <i className={"fas fa-thumbs-up" + ((likes > 0) ? ' hasLikes' : '')} onClick={likeImages}></i>
                    <span className={((likes > 0) ? ' hasLikes' : '')}>0{ likes }</span>
                </div>
                <div className='refresh'>
                    <i className="fas fa-sync-alt" onClick={decrementLikes}></i>
                    <span>00</span>
                </div>
            </div>
            <div className='content-products_item__actions-mobile'>
                <div className='like'>
                    <span className={((likes > 0) ? ' hasLikes' : '')}>0{ likes }</span>
                    <i className={"fas fa-thumbs-up" + ((likes > 0) ? ' hasLikes' : '')} onClick={likeImages}></i>
                </div>
                <div className='refresh'>
                    <span>00</span>
                    <i className="fas fa-sync-alt" onClick={decrementLikes}></i>
                </div>
            </div>
        </div>
    )
}
