import React, { Component } from 'react';
import Head from 'next/head';
import NotesListStyles from './styles/NotesListStyles';
import withContextValues from '../lib/withContextValues';

class NotesList extends Component {
  componentDidMount() {
    this.props.contextValues.getNotes();
  }
  render() {
    const { notes } = this.props.contextValues.state;
    return (
      <NotesListStyles>
        {notes.map(({ title }, i) => <p key={i}>{title}</p>)}
      </NotesListStyles>
    )
  }
}

export default withContextValues(NotesList);
