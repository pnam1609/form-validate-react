import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading/Loading'
import callApi from '../Utils/apiCaller'

function WithData(WarappedComponent, url) {
    return () => {
        const [data, setData] = useState([])

        useEffect(() => {
            (async () => {
                const res = await callApi(url)
                const data = res.data
                setTimeout(() => {
                    this.setState({ data })
                }, 3000);
            })()
        }, [])
        if (this.state.data.length === 0) {
            return <Loading type={'ball'} color={'blue'} />
        }
        return <WarappedComponent data={this.state.data} {...this.props} />
    }
}

export default WithData


