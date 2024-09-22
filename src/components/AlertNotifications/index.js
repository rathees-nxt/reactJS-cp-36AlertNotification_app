// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <div className="alert-content-details">
        <AiFillCheckCircle className="icon success" />
        <div className="alert-container">
          <h1 className="heading success">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <div className="alert-content-details">
        <RiErrorWarningFill className="icon error" />
        <div className="alert-container">
          <h1 className="heading error">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the files
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <div className="alert-content-details">
        <MdWarning className="icon warning" />
        <div className="alert-container">
          <h1 className="heading warning">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <div className="alert-content-details">
        <MdInfo className="icon info" />
        <div className="alert-container">
          <h1 className="heading info">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="alert-notification">
        <h1 className="alert-heading">Alert Notifications</h1>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}

export default AlertNotifications
