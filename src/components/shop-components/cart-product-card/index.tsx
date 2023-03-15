import { useContext } from 'react';
import { ShopContext, IProduct } from '../../../providers/shopProvider';
import { StyledProductCardCart } from "./styled"

interface IProductCardProp {
  cartProduct: IProduct
}

export const CartProductCard = ({cartProduct}: IProductCardProp) => {

const {deleteProductCart} = useContext(ShopContext)

  return (
    <StyledProductCardCart>
      <img className='img_cart' src={cartProduct.img} alt={cartProduct.name} />
      <p> {cartProduct.name} </p>
      <button className='button_cart' onClick={() => deleteProductCart(cartProduct.id)}> Remover </button>
    </StyledProductCardCart>
  )
}

