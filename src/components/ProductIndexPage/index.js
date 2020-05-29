import React, { Component } from 'react';
// import productsData from '../../data/products';
// import { render } from '@testing-library/react';
import ProductDetails from '../ProductDetails';
// import ProductForm from '../ProductForm';
import { Link } from 'react-router-dom';
import { Product } from '../../requests';


class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        // this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        Product.all().then((products) => {
            // console.log(products)
            this.setState({
                products: products
            })
        })
    }
    deleteProduct(id){
        console.log(id);
        this.setState((state) => {
            return {
                products: state.products.filter((product) => {
                    return product.id !== id;
                })
            }
        })

    }

    // createProduct(params) {
    //     console.log('createProduct invoked')
    //     this.setState((state) => {
    //       return {
    //         products: [
    //           { ...params,
    //             id: state.products[0] + 1,
    //             created_at: new Date().toString()
    //           },
    //           ...state.products
    //         ]
    //       }
    //     })
    //   }

    render() {
        return(
            <main className='page'>
                {/* <ProductForm createProduct={ this.createProduct }/> */}
                { this.state.products.map((product) => {
                    return(
                        <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductDetails {...product} deleteProduct={this.deleteProduct}/>
                        </Link>
                            //   id={product.id}
                            //   price={product.price}
                            //   seller={product.seller}
                            // />
                    )
                })}

            </main>
        )
            
    }
    
}


export default ProductIndexPage