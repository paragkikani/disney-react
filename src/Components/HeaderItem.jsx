import React from 'react'

function HeaderItem(props) {
    return (
        <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3 '>
            <props.ICon/>
            <h2>{props.name}</h2>

        </div>
    )
}

export default HeaderItem