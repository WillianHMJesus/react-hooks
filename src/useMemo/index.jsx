import { useEffect, useMemo, useState } from "react";
import Post from './components';

const Memo = () => {
  const [posts, setPosts] =  useState([]);
  const [value, setValue] =  useState('');

  console.log('Memo renderizou');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [])

  return (
    <div>
      <p>
        <input
          type="search" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 && 
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })
        );
      }, [posts])}
    </div>
  );
}

export default Memo;