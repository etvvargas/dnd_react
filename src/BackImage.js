// Author: Ethan Vargas
import React from 'react'

export default class BackImage extends React.Component {
    render() { 
        if (this.props.sheet_type === "character") {
            return (
                <div className="BackImageCharacter" />
            )
        } else if (this.props.sheet_type === "enemy") {
            return (
                <div className="BackImageEnemy" />
            )
        }

        return (
            <div>BackImage</div>
        )
    }
}