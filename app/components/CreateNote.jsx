import React, { Component } from 'react';
import { NoteConsumer } from './NoteProvider';

class CreateNote extends Component {
  render() {
    return (
      <NoteConsumer>
        {({ state, toggleDrawer }) => (
          <p>I will tell you if I'm open or closed:
            {state.drawerOpen ? 'Open!!!' : 'Closed'}
            <button onClick={toggleDrawer}>Toggle</button>
          </p>
        )}
      </NoteConsumer>
    );
  }
}

export default CreateNote;
