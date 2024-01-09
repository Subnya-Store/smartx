import React from 'react'

export default function Pakages() {
  return (
    <div className="flex justify-center mb-[50%] sm:mb-[0%]">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">your active pakage</h5>
          <p className="text-blue-700 text-lg ">
            Basic
          </p>
        </div>
      </div>
    </div>
  )
}
