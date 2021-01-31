import React from "react";


export default function Search (props) {
    return (
        <div className="mr-3">
            <input 
                className ="input-small mb-1 search"
                type="search" 
                value={props.value}
                placeholder="Search..."
                onChange={props.onChange}
                >
            </input>
        </div>
    )
};
