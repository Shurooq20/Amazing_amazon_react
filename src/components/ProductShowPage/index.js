import React, { Component } from 'react'
// import productData from '../../data/product'
import ProductDetails from '../ProductDetails';
// import ReviewDetails from '../ReviewDetails';
// import review from '../../data/review';
import ReviewList from '../ReviewList';
import { Product }from '../../requests'

// function ProductShowPage() {
//   const { id, title, description, created_at, seller, reviews } = productData
//   return (
//     <main className='page'>
//       <ProductDetails 
//         id={id}
//         title={title}
//         description={description}
//         created_at={created_at}
//         seller={seller}
//       />
     
//         <ReviewList reviews={reviews} />
//       {/* { reviews.map( review => {
//           return(
//               <ReviewDetails key={review.id} { ...review} />

//           )
//       })} */}
//     </main>
//   )
// }

class ProductShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // product: productData
            product: {}
        }
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount(){
        Product.one(this.props.match.params.id).then((product) => {
            // console.log(product)
            this.setState((state) => {
                return {
                    product
                }
            })
        })
    }

    deleteReview(id) {
        this.setState((state) => {
          return {
            product: {
              ...state.product,
              reviews: state.product.reviews.filter((r) => {
                return r.id !== id;
              })
            }
          }
        })
      }
    


    render() {
        const { id, title, description, created_at, seller, reviews, sale_price } = this.state.product;
        return (
            <main className='page'>
                {
                    id ?
                    <ProductDetails 
                        id={id}
                        title={title}
                        price={sale_price}
                        description={description}
                        created_at={created_at}
                        seller={seller}
                    /> :
                    <div>Product is loading...</div>
                }
                <ReviewList reviews={reviews} deleteReview={this.deleteReview} />
            
            </main>
          )


    }
}
export default ProductShowPage