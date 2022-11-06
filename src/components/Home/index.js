import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

import Navbar from '../Navbar'
import TopCardSection from '../TopCardSection'
import BottomCardSection from '../BottomCardSection'
import SecondSection from '../SecondSection'
import './index.css'

const buttonList = [
  {
    id: 1,
    buttonText: 'Great for group',
  },
  {
    id: 2,
    buttonText: 'Family-friendly',
  },
  {
    id: 3,
    buttonText: 'Animals',
  },
  {
    id: 4,
    buttonText: 'Arts & Writing',
  },
  {
    id: 5,
    buttonText: 'Backing',
  },
  {
    id: 6,
    buttonText: 'Cooking',
  },
  {
    id: 7,
    buttonText: 'Dance',
  },
  {
    id: 8,
    buttonText: 'Drink',
  },
  {
    id: 9,
    buttonText: 'Entertainment',
  },
  {
    id: 10,
    buttonText: 'Fitness',
  },
  {
    id: 11,
    buttonText: 'History & culture',
  },
  {
    id: 12,
    buttonText: 'Magic',
  },
  {
    id: 13,
    buttonText: 'Music',
  },
  {
    id: 14,
    buttonText: 'Social impact',
  },
  {
    id: 15,
    buttonText: 'Wellness',
  },
  {
    id: 16,
    buttonText: 'Olympians & Paralympians',
  },
  {
    id: 17,
    buttonText: 'Designed for accessibility',
  },
]

const imagesList = [
  {
    id: 1,
    rating: 4.5,
    country: 'United States',
    description: 'Plan the perfect America vacation',
    cost: 2500,
    imageUrl:
      'https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667720656/shutterstock-1041475570_u6cjqw.jpg',
  },
  {
    id: 2,
    rating: 4.8,
    country: 'Maldives',
    description: 'Enjoy the holiday in maldives',
    cost: 3400,
    imageUrl:
      'https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667720630/an-airplane-is-approaching-a-tropical-paradise-island-in-the-maldives-picture-id1296147185_bwbp91.jpg',
  },
  {
    id: 3,
    rating: 4.9,
    country: 'India',
    description: 'Design your trip to India',
    cost: 1500,
    imageUrl:
      'https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667720604/18-2021-05-11-02-56-56-houseboat1_wy2jjk.jpg',
  },
  {
    id: 4,
    rating: 4.7,
    country: 'Australia',
    description: 'Plan a trip to amazing Australia',
    cost: 3000,
    imageUrl:
      'https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667720554/malani-volvo-bus_v0ie4r.jpg',
  },
  {
    id: 5,
    rating: 4.88,
    country: 'Egypt',
    description: 'Explore the egypt pyramids',
    cost: 2000,
    imageUrl:
      'https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667713145/airbnb-cardImage1_bdvaq4.webp',
  },
]

const Home = () => {
  const renderSecondSection = () => (
    <div className="button-section-container">
      <div className="button-container">
        <button type="button" className="second-section-button">
          Dates
        </button>
        <button type="button" className="second-section-button">
          Group size
        </button>
        <button type="button" className="second-section-button">
          More filters
        </button>
      </div>

      <ul className="section-section-list">
        {buttonList.map(each => (
          <SecondSection buttonDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )

  const renderBottomSection = () => (
    <>
      <div className="bottom-heading-and-buttons-container">
        <h1 className="bottom-card-heading">
          Plan a trip with help from local Hosts around the world
        </h1>
        <div className="buttons-container">
          <button type="button" className="button">
            <BsChevronLeft className="button-icon" />
          </button>
          <button type="button" className="button">
            <BsChevronRight className="button-icon" />
          </button>
        </div>
      </div>
      <ul className="images-list">
        {imagesList.map(eachImage => (
          <BottomCardSection imageDetails={eachImage} key={eachImage.id} />
        ))}
      </ul>
    </>
  )

  return (
    <>
      <Navbar />
      <div className="home-main-container">
        <div className="home-container">
          <div className="heading-container">
            <h1 className="heading">New this week</h1>
            <div className="buttons-container">
              <button type="button" className="button">
                <BsChevronLeft className="button-icon" />
              </button>
              <button type="button" className="button">
                <BsChevronRight className="button-icon" />
              </button>
            </div>
          </div>
          <TopCardSection />
          {renderSecondSection()}
          {renderBottomSection()}
        </div>
      </div>
    </>
  )
}
export default Home
