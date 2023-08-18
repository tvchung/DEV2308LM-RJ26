import React, { Component } from 'react'
import Member from './Member'

export default class MemberList extends Component {
  render() {
    return (
      <div>
        <h2>MemberList</h2>
        <Member name="Nguyễn Văn Văn" age = "21" />
        <Member name="Nguyễn Văn B" age = "22" />
        <Member name="Nguyễn Văn C" age = "21" />
        <Member name="Nguyễn Văn D" age = "20" />
      </div>

    )
  }
}
