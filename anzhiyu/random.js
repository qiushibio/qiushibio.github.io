var posts=["2024/01/31/Analytical_chemistry_YuYue/","2024/03/17/LatexAndMarkdown/","2024/01/31/Biochemistry_Zhanghaonan/","2024/01/29/tutorial/","2024/01/31/Ecology_ShiZhaoqi/","2024/01/31/Molecular_Biology_Sunpanyi/","2024/01/31/Maojiongran/","2024/01/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };