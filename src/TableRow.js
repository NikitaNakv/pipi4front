import React, { Component } from 'react';

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.X}</td>
                <td>{this.props.data.Y}</td>
                <td>{this.props.data.R}</td>
                <td>{String(this.props.data.result)}</td>
            </tr>
        );
    }
}