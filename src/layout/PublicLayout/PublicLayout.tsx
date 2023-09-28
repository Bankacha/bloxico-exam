import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

interface PublicLayoutProps {
    children?: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return <>{children || <Outlet />}</>
}

PublicLayout.propTypes = {
    children: PropTypes.node
}

export default PublicLayout