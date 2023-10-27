import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <li className="language-list">
      <img className="language-image" src={imageUrl} alt={`${imageAltText}`} />
    </li>
  )
}
export default LanguageItem
