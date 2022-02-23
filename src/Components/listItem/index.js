import './index.css'

const ListItem = props => {
  const {details, onDelete, showPassword} = props
  const {id, website, username, colorClassName, password} = details

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list" id={id} key={id}>
      <p className={`first-letter ${colorClassName}`}>
        {username[0].toUpperCase()}
      </p>
      <div className="details-container">
        <p className="website-name">{website}</p>
        <p className="website-name">{username}</p>
        {showPassword ? (
          <p className="website-name">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default ListItem
