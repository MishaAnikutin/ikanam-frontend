import React from 'react'
import './HeadBarElement.css'

const HeadBarElement = ( {selectedTag, setSelectedTag, tag} ) => {
  return (
    <button 
        key={tag.name}
        className={`tag-btn ${tag.name === selectedTag ? 'active' : ''}`} 
        onClick={() => setSelectedTag(tag.name)}
    >
        <span>{tag.name}</span>
    </button>  
    )
}

export default HeadBarElement