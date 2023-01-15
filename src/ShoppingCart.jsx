import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    // console.log("constructor - ShoppingCart");

    super(props);

    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render - ShoppingCart");

    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary" onClick={ () =>{alert("Your Order have been placed, Thank You!!")}}>Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  // Executes after constructor & other render metho (includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    // console.log("componentDidMount - ShoppingCart");

    // Fetch data from data source
    // var promise = fetch(" http://localhost:5000/products", { method: "GET"});
    // promise.then((response) => {
    //     console.log(response);

    //     var promise2 = response.json();
    //     promise2.then((prods) => {
    //         console.log(prods);
    //         this.setState({ products: prods });
    //     });
    // });
    var response = await fetch(" http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    // console.log(prods);
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate - ShoppingCart", prevProps, prevState, this.props, this.state);
    // if(prevProps.x != this.props.x) {
    //     // Make http call
    // }
  }

  // Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart");
    // console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    // console.log("handleIncrement", product);

    let allProducts = [...this.state.products];
    // let index = allProducts.indexOf(product);
    let index = -1;
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === product.id) {
        index = i;
        break;
      }
    }
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity += 1;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    // console.log("handleDecrement", product);

    let allProducts = [...this.state.products];
    // let index = allProducts.indexOf(product);
    let index = -1;
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === product.id) {
        index = i;
        break;
      }
    }

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity -= 1;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    // let index = allProducts.indexOf(product);
    let index = -1;
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id === product.id) {
        index = i;
        break;
      }
    }

    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
