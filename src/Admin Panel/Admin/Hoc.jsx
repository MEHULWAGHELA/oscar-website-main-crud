import './style/hoc.css'
import React from 'react'
import { Fragment } from 'react'
import Sidebar from './Sidebar'
const Hoc = (Component) => {
    const NewComponent = () => {
        const logoutFunction=()=>{
            localStorage.setItem('isLogin',false)
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
                            onClick={logoutFunction}
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