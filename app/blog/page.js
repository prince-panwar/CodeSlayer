import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
      <Link  href={"/blog/1"}>link to blog 1</Link>
    </div>
  )
}

export default page
