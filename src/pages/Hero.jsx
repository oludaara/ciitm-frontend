import React from 'react'
import { IoClose } from "react-icons/io5";

const Hero = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center bg-[url(https://s3-alpha-sig.figma.com/img/3a79/821c/cb304d66d7adb6b2dc98a09e6c614654?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtwlaGzBkgP1Yc4j2a1jKDX~BgoVIKxVWjK8IADR4mPr~1jgE5ygGq8MQTH9OPnq4HOdYD~smRlBVwSxlG0sSIg0QEaA5rWEviv-wvkF1STISrcxGZWr0eIMCKF2CTMSaU1uR3HSdhjULsn17wtNvCBHhjV41f~pgqkNInT7Mnd3gyDfP67J6NVvfp9dm-8lSu-ukTLPRSaXdnOCz~OvcfABgqp0zD2ZDZSi28iEY5vj7Er4ZxXUQNN1MisKNDZxxJYaSWNixEOG1IeP-2hUbnKcGTNmPlMMvT5eMOLfljsCh69lSvSIwuJGMdR7fANdQHcOXcajVRHmbxJau7U3fg__)] text-white bg-cover px-10'>
      <div className="text w-1/2 h-full flex items-start justify-center flex-col">
        <h3 className='text-6xl font-[700] leading-tight'>Shape Tomorrow</h3>
        <h3 className='text-6xl font-[700] leading-tight'>with Quality</h3>
        <h3 className='text-6xl font-[700] leading-tight'>Education</h3>
        <p className='text-2xl w-[70%] '>Empowering students to achieve academic success with professional resources</p>
      </div>
      <div className="card-container h-full w-1/2 flex items-end justify-end pb-20 flex-col gap-4">
        <div className="card w-[60%] text-black bg-white rounded-md px-4 py-2 flex items-start justify-between">
          <h3 className='w-1/2'>Download Free Call</h3>
          <button className='bg-[#FF0000] px-2 rounded text-white'>Explore Now</button>
          <IoClose fontWeight={900} size={20} />
        </div>
        <div className="card w-[60%] text-black bg-white rounded-md px-4 py-2 flex items-start justify-between">
          <h3 className='w-1/2'>Apply online admission 2025-2026</h3>
          <button className='bg-[#FF0000] rounded px-2 text-white'>Apply Today</button>
          <IoClose fontWeight={900} size={20} />
        </div>
      </div>
    </section>
  )
}

export default Hero