import './index.css'

const TopCardSection = () => (
  <div className="top-card-container">
    <div className="card1-container">
      <div className="card-details-container">
        <div>
          <p className="collection">Collection</p>
          <h1 className="collection-name">Most popular around the world</h1>
        </div>
        <button className="show-all-button" type="button">
          Show all
        </button>
      </div>
    </div>

    <div className="card2-container">
      <div className="card-details-container">
        <div>
          <p className="collection">Collection</p>
          <h1 className="collection-name">Great for the team building</h1>
        </div>
        <button className="show-all-button" type="button">
          Show all
        </button>
      </div>
    </div>

    <div className="card3-container">
      <div className="card-details-container">
        <div>
          <p className="collection">Collection</p>
          <h1 className="collection-name">Fun for the family</h1>
        </div>
        <button className="show-all-button" type="button">
          Show all
        </button>
      </div>
    </div>
  </div>
)

export default TopCardSection
