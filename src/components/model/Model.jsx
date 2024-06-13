import React from 'react'

const Model = ({ children, close }) => {
    return (
        <>
            <div onClick={() => close(false)} className="overlay"></div>
            <div className='model'>
                {children}
            </div>
        </>
    )
}

export default Model
