import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Nguyen Van A',
                sex: 'Nam',
                dateOfBirth: '06/03/2024',
                email: 'nva@gmail.com',
                address: 'Thanh Xuan, Ha Noi'
            }
        };
    }

    render() {
        const { name, age, email, address } = this.state.user;
        return (
            <div>
                <h1>User Information</h1>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Sex:</strong> {sex}</p>
                <p><strong>dateOfBirth</strong> {dateOfBirth}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}</p>
            </div>
        );
    }
}

export default UserInfo;
