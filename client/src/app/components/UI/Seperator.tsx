import React from 'react'

interface SeperatorProps {
  className?: string;
}

const Seperator: React.FC<SeperatorProps> = ({ className }) => {
  return (
    <div className={`${className}`} >
        
    </div>
  )
}

export default Seperator