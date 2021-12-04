import React from 'react'
import Loading from '../Components/Loading/Loading'
import callApi from '../Utils/apiCaller'

function WithData(WarappedComponent, url) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }

        componentDidMount() {
            (async () => {
                const res = await callApi(url)
                const data = res.data
                setTimeout(() => {
                    this.setState({ data })
                }, 3000);
            })()
        }
        render() {
            if (this.state.data.length === 0) {
                return <Loading type={'ball'} color={'blue'} />
            }
            return <WarappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default WithData


