import React, { Component, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

export default class ToggleTheme extends Component {
    static contextType = ThemeContext;
  render() {
    const {toggleTheme} = this.context;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    )
  }
}


// export default ToggleTheme = () => {
//     const {toggleTheme} = useContext(ThemeContext);
//   return (
//     <div>
//            <button onClick={toggleTheme}>Toggle</button>
//     </div>
//   )
// }
