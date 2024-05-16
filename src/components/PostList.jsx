import { useState } from "react";
import PropTypes from 'prop-types';

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classess from './PostList.module.css';


function PostList({ modalIsvisible, changeModalStateHandler }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPost) => [postData, ...existingPost]);
    }

    return (
        <>
            {modalIsvisible && (
                <Modal onModalStateChange={changeModalStateHandler}>
                    <NewPost onCancel={changeModalStateHandler} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length === 0 ?
                <p style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </p> :
                <ul className={classess.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.body} />
                    ))}
                </ul>}
        </>
    )
}

PostList.propTypes = {
    modalIsvisible: PropTypes.node.isRequired,
    changeModalStateHandler: PropTypes.node.isRequired
};

export default PostList;