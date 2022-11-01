import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination
  return (
    <li className="destination-item">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
