import React, { Component } from "react";

export default class CustomersList extends Component {

    state = { 
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            { id: 1, 
                name: "Scott", 
                phone: "123-456", 
                address: { city: "New Delhi" },
                photo: "https://picsum.photos/id/1010/60"
            },
            { 
                id: 2, 
                name: "Jones", 
                phone: "456-123", 
                address: { city: "London" },
                photo: "https://picsum.photos/id/1011/60"  
            },
            { 
                id: 3, 
                name: "Bllen", 
                phone: "789-011", 
                address: { city: "Pune" },
                photo: "https://picsum.photos/id/1012/60"  
            },
            { 
                id: 4, 
                name: "James", 
                phone: "", 
                address: { city: "Ohio" },
                photo: "https://picsum.photos/id/1013/60"  
            },
            { 
                id: 5, 
                name: "John", 
                phone: "", 
                address: { city: "New York" },
                photo: "https://picsum.photos/id/1014/60"  
            },
        ],
    };

    customerNameStyle = (custName) => {
        if(custName.startsWith("S")) return "green-highlight";
        else if(custName.startsWith("J")) return "red-highlight";
        else return "";
    }

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    { this.state.pageTitle }

                    <span className="badge bg-secondary m-2">
                        { this.state.customersCount }
                    </span>

                    <button className="btn btn-info" onClick={ this.onRefreshClick }>Refresh</button>
                </h4>    

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>{ this.getCustomerRow() }</tbody>
                </table>            
            </div>
        );
    }

    onRefreshClick = () => {
        this.setState({
            customersCount: 7,
        });
    }

    getPhoneToRender = (phone) => {
        return phone ? (
            phone
        ) : (
            <div className="bg-warning p-2 text-center">No Phone</div>
        );
    }

    getCustomerRow = () => {
        return this.state.customers.map((cust, index) => {
            return (
                <tr key={ index }>
                    <td>{ cust.id }</td>
                    <td>
                        <img src={ cust.photo } alt="Customer" />
                        <button className="btn btn-sm btn-secondary" onClick={ () => { this.onChangePictureClick(cust, index) }}>
                            Change Picture
                        </button>
                    </td>
                    <td className={ this.customerNameStyle(cust.name) }>
                        { cust.name }
                    </td>
                    <td>{ this.getPhoneToRender(cust.phone) }</td>
                    <td>{ cust.address.city }</td>
                </tr>   
            );
        });
    }

    onChangePictureClick = (cust, index) => {
        // console.log(cust, index);

        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/104/60";
        this.setState({ customers: custArr });
    }
}