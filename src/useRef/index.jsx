import { useEffect, useMemo, useRef, useState } from "react";
import Post from './components';

const Ref = () => {
  const [posts, setPosts] =  useState([]);
  const [value, setValue] =  useState('');
  const input = useRef(null);

  console.log('Memo renderizou');

  const handleClick = (value) => {
    setValue(value);
  }

  useEffect(() => {
    input.current.focus();
  }, [value])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [])

  return (
    <div>
      <p>
        <input
          ref={input}
          type="search" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 && 
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />
          })
        );
      }, [posts])}
    </div>
  );
}

export default Ref;