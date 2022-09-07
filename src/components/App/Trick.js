import React from 'react'

class Trick extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                stance: props.stance,
                name: props.name,
                obstacle: props.obstacle,
                tutorial: props.tutorial,
                id: props.id
            }
    }
    
}