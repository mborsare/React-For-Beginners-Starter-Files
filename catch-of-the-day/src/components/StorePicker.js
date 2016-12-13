import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /* this is a comment, it's syntax is weird in JSX */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
