import React, { Component } from 'react'
import productData from '../../data/product'
import ProductDetails from '../ProductDetails';
// import ReviewDetails from '../ReviewDetails';
// import review from '../../data/review';
import ReviewList from '../ReviewList';

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
            product: productData
        }
        
    }

    render() {
        const { id, title, description, created_at, seller, reviews } = this.state.product;
        return (
            <main className='page'>
              <ProductDetails 
                id={id}
                title={title}
                description={description}
                created_at={created_at}
                seller={seller}
              />
              <ReviewList reviews={reviews} />
            </main>
          )


    }
}
export default ProductShowPage