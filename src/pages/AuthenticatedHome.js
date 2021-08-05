import React, { Component } from 'react'
import AuthenthenticatedTop from '../components/AuthenticatedTop'
import Bottomsection from '../components/Bottomsection'
import CardCarousel from '../components/Carousel'

export class AuthenticatedHome extends Component {
    render() {
        return (
            <div>
                <AuthenthenticatedTop />
                <CardCarousel />
                <Bottomsection />
            </div>
        )
    }
}

export default AuthenticatedHome
