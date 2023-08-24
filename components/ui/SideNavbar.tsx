'use client'

import React from 'react'
import Link from 'next/link'





function Navbar() {
  return (
    
    <div className=" hidden sm-block md:block max-w-md mx-auto md: w-auto container">
    <aside id="default-sidebar" className="fixed top-0 left-0 md:w-40 sm: w-35  h-screen" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <br/>
          <br/>
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/DataLake"}>Data Lake</Link><br/><br/></li><br />
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/DataSharing"}>Data Sharing </Link><br/><br/></li><br />
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/BigData"}>Big Data</Link><br/><br/></li><br />
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/DataGovernance"}>Data Governance</Link><br/><br/></li><br />
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/DataLakehouse"}>Data Lakehouse</Link><br/><br/></li><br />
         <li className="text-lg text-blue-500 border-b border-gray-200 "><Link href={"/features_pages/DataWarehousing"}>Data Warehousing</Link><br/><br/></li>
         
      </ul>    
   </div>
</aside>
</div>
  )
}
export default Navbar