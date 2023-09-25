import React, { useContext } from 'react'
import { ThemeContext } from './DemoContext'
function Infor() {
    const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
      Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
      </p>
      <p>
        
      </p>
    </div>
  )
}

export default Infor
