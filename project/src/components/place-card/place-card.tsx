import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import PremiumLabel from '../premium-label/premium-label';

type CardProps = {
  offer: Offer;
  cardType: string;
  onMouseEnterCard?: (id: number) => void;
  onMouseLeaveCard?: () => void;
}

const ArticleClassName = new Map([['cities', 'cities__place-card'], ['favorites', 'favorites__card'], ['near-places', 'near-places__card']]);
const ACTIVE_BOOKMARK_CLASS_NAME = 'place-card__bookmark-button--active';

function PlaceCard({offer, cardType, onMouseEnterCard, onMouseLeaveCard}: CardProps): JSX.Element {
  const mouseEnterHandler = () => {
    if (onMouseEnterCard) {
      onMouseEnterCard(offer.id);
    }
  };

  const mouseLeaveHandler = () => {
    if (onMouseLeaveCard) {
      onMouseLeaveCard();
    }
  };

  return (
    <article className={`${ArticleClassName.get(cardType)} place-card`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {offer.isPremium && <PremiumLabel className={'place-card__mark'} />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className='place-card__image' src={offer.previewImage}
            width={cardType === 'favorites' ? '150' : '260'}
            height={cardType === 'favorites' ? '110' : '200'} alt='Place image'
          />
        </Link>
      </div>
      <div className={`${cardType}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? ACTIVE_BOOKMARK_CLASS_NAME : ''}`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'/>
            </svg>
            <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: '100%'}}/>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className='place-card__type' style={{textTransform: 'capitalize'}}>{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
