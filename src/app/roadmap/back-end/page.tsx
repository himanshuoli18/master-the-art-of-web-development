import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <div>
      <Image src="/map/backend.svg" alt="" width={2000} height={500} priority={true}/>
    </div>
  )
}

export default page
