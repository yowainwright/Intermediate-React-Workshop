import React, { Component } from 'react';
import axios from 'axios';
import { endpoint } from '../config';

const NoteContext = React.createContext();

/**
 * create a provider Component
 * @returns <NoteContext.Provider>
 */
class NoteProvider extends Component {
  state = {
    notes: [],
    drawerOpen: false,
  };

  render() {
    return (
      <NoteContext.Provider
        value={{
          state: this.state,
          toggleDrawer: () => {
            this.setState({ drawerOpen: !this.state.drawerOpen });
          },
          saveNote: async (note) => {
            const res = await axios.post(endpoint, { note });
            this.setState({
              notes: [res.data, ...this.state.notes],
              drawerOpen: false,
            });
          }
        }}
      >
        {this.props.children}
      </NoteContext.Provider>
    );
  }
}

const NoteConsumer = NoteContext.Consumer;

export default NoteProvider;
export { NoteConsumer };
