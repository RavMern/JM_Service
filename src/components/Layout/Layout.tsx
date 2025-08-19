import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Layout(): React.ReactElement {
    return (
        <div>
            <Header />
            <div className='px-14 py-20'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout