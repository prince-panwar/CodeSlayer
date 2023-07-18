import React from 'react'
import useRouter from "next/router";
function slug() {
  const router=useRouter()
  const {data}= router.query;
  return (
    <div>
      {data}
    </div>
  )
}
export default slug
