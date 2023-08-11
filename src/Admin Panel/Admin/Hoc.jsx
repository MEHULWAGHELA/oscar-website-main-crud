import React from 'react'
import { Fragment } from 'react'
import Sidebar from './Sidebar'
const Hoc = (Component) => {
    const NewComponent = () => {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <Component />
                    </div>
                </div>
            </Fragment>
        )
    }
    return NewComponent
}
export default Hoc