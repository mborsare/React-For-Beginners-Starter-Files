import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* this is a comment, its syntax is weird in JSX */ }
        <h2>Please Enter a Store</h2>
        <input type="text"
          required placeholder="Store Name"
          defaultValue={getFunName()}
          ref={ (input) => { this.storeInput = input } } />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
