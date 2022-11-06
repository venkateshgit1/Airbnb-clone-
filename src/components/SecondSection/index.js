import './index.css'

const SecondSection = props => {
  const {buttonDetails} = props
  const {buttonText} = buttonDetails
  return (
    <li className="second-section-container">
      <button type="button" className="text-button">
        {buttonText}
      </button>
    </li>
  )
}
export default SecondSection
