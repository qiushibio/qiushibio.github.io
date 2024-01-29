var posts=["2024/01/29/hello-world/","2024/01/29/tutorial/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };