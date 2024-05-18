import React from 'react'

const ErrorPanel = (props) => {
  return (
    <div>
      <h1 className="text-center text-[2em] font-bold text-red-500 border border-bayavaOrange px-9 py-6 rounded-md my-[10em] w-fit mx-auto ">
        {props.msg}
      </h1>
    </div>
  )
}

export default ErrorPanel