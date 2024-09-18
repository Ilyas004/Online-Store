import React from "react"


export const Block = ({children, className, bgColor = ''}) => {
    return (
        <div className={className}>
            <div className={`px-3 md:px-10 max-w-7xl m-auto w-full ${bgColor}`}>
                {children}
            </div>
        </div>
    )
}