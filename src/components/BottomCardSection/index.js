import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import './index.css'

const BottomCardSection = props => {
  const {imageDetails} = props
  const {imageUrl, country, rating, cost, description} = imageDetails

  return (
    <li className="images-list-container">
      <img src={imageUrl} alt="third section" className="third-section-image" />
      <div className="details-container">
        <div className="rating-and-country-container">
          <p className="rating">
            <AiFillStar className="star-icon" /> {rating}
          </p>
          <p className="country">{country}</p>
        </div>
        <p className="description">{description}</p>
        <p className="cost">
          From <BiRupee className="rupee-icon" />
          {cost}/<span className="span">person</span>
        </p>
      </div>
    </li>
  )
}

export default BottomCardSection
