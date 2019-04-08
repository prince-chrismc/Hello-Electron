import React from 'react';

export class MessageComponent extends React.Component{
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}