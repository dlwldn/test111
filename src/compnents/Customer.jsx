import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete'


const styles = ({
    imgSize: {
        maxWidth: 64,
        height: 64,
    }
})

class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.id}
                </TableCell>
                <TableCell>
                    <img style={styles.imgSize} src={this.props.image} alt="profile" />
                </TableCell>
                <TableCell>
                    {this.props.name}
                </TableCell>
                <TableCell>
                    {this.props.birthday}
                </TableCell>
                <TableCell>
                    {this.props.gender}
                </TableCell>
                <TableCell>
                    {this.props.job}
                </TableCell>
                <TableCell>
                    <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/>
                </TableCell>
            </TableRow>
        )
    }
}

export default Customer
