import { Button } from '../../components/Button/Button'
import { CardProducts } from '../../components/CardProducts/CardProducts'

import './FeaturedProducts.css'

const FeaturedProducts = () => {
  return (
    <div className='root'>
      <h1>Featured Products</h1>
      <hr />
      <CardProducts length={2} />
      <Button path={'/products/'}>ALL PRODUCTS</Button>
      
    </div>
  )
}

export default FeaturedProducts
