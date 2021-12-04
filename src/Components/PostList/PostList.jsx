import React from 'react'
import WithData from "../../Hoc/WithData"
import PostItem from './PostItem';

function PostList({ data }) {
    return (
        <div style={{padding: 50}}>
            {data.map((item => <PostItem key={item.id} item={item.title} />))}
        </div>
    )
}

export default WithData(PostList, "posts")
