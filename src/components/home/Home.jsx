import React, { Compoennt } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('HOME ', this.props)
        const { inc, dec, reset } = { ...this.props.actions.counterActions }
        return (
            <div className='main'>
                <div className='flex-home'>
                    <div className='counter'>
                        <h2><Label bsStyle="info" >
                            COUNTER {this.props.value}</Label></h2>
                    </div>
                    <div className='actions'>
                        <div>
                            <ButtonGroup>
                                <Button
                                    bsStyle="success"
                                    bsSize="large"
                                    onClick={inc}> INCREMENT </Button>
                                <Button
                                    bsStyle="warning"
                                    bsSize="large"
                                    onClick={dec}> DECREMENT </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className='reset'>
                        <Button
                            bsStyle="danger"
                            bsSize="large" onClick={reset}> RESET</Button>
                    </div>
                </div>
            </div>
        )

    }
}
