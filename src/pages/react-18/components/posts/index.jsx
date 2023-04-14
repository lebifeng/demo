import React from 'react';

function generatePosts() {
  const posts = [];
  for (let i = 0; i < 1000; i++) {
    posts.push({
      id: i,
      title: `Post ${i}`,
    });
  }
  return posts;
}

const posts = generatePosts();

function SlowPost({ title }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='item'>Post #{title + 1}</li>;
}

function Posts() {
  return posts.map((post) => <SlowPost key={post.id} title={post.title} />);
}

export default Posts;
