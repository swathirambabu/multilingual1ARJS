import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    clickTabItem(id)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
