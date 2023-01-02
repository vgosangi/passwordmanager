import './index.css'

const Password = props => {
  const {passwordDetails, deleteUser, selected} = props
  const {id, website, username, password} = passwordDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <h1>{website[0]}</h1>
      <div className="user-details-container">
        <p className="user-name"> {website} </p>
        <p className="user-designation"> {username} </p>
        {selected ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default Password
