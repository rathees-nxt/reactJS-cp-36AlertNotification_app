// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div className="notification-content">
      <div className="alert-content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
