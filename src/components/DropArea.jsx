import React, { useState } from "react";
import './DropArea.css'
const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section 
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(false)}
        className={showDrop ? 'drop_area' : 'hide_drop'}
        onDrop={() => {
            onDrop();
            setShowDrop(false)
        }}
        onDragOver={(e) => e.preventDefault()}
        >
            Drop Area
        </section>
    )
}

export default DropArea