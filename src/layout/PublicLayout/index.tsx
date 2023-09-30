import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

interface PublicLayoutProps {
    children?: ReactNode;
}

const Index: FC<PublicLayoutProps> = ({ children }) => {
    return <>
        <Navigation/>
        <Outlet />
    </>
}

Index.propTypes = {
    children: PropTypes.node
}

export default Index