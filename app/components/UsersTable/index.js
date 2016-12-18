/**
*
* UsersTable
*
*/

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import { USER_TYPE } from './constants';


class UsersTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
  };

  createTableRow(user) {
    return (
      <TableRow key={user.username}>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn>{user.firstName}</TableRowColumn>
        <TableRowColumn>{user.lastName}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
      </TableRow>
    );
  }
  render() {
    const rows = this.props.users.map((user) =>
      this.createTableRow(user)
    );
    return (
      <Card style={{ margin: '25px' }}>
        <CardTitle title="Users list" />
        <Table bordered fixedHeader={false}>
          <TableHeader tooltip="Users" style={{ textAlign: 'center' }}>
            <TableRow>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows >
            {rows}
          </TableBody>
        </Table>
      </Card>
    );
  }

}


export default UsersTable;
