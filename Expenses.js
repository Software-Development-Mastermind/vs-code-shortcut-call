import React, { Component } from 'react'

class Expenses extends Component {
    render() {
        const expenseRows = this.props.expenses.map(function(expense) {
            return (
                <tr>
                    <td>{expenze.date}</td>
                    <td>{expenze.type}</td>
                    <td>{expenze.amount}</td>
                    <td>{expenze.description}</td>
                </tr>
            );
        });

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseRows}     
                </tbody>
            </Table>
        )
    }
}

export default Expenses;