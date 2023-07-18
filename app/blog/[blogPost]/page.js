"use client"


function blogPost({params}) {
console.log(params);
  
  return (
    <div>
   <h4>This is blog No {params.blogPost}</h4>
    </div>
  )
}
export default blogPost;
