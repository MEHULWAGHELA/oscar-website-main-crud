import './style/hoc.css'
import React from 'react'
import { Fragment } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
const Hoc = (Component) => {
    const NewComponent = () => {
        let navigate = useNavigate();
        const logOutFunction = () => {
            localStorage.removeItem('token')
            navigate('/admin')
        }
        return (
            <Fragment>
                <div className="row" id="hoc">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <button
                            id="logout-button"
                            onClick={logOutFunction}
                        >
                            Log out
                        </button>
                        <Component />
                    </div>
                </div>
            </Fragment>
        )
    }
    return NewComponent
}
export default Hoc