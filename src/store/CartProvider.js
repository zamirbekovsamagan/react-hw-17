import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
function cartReducer(prevState, action) {
    if (action.type === 'ADD') {
        const updatedItems = prevState.items.concat(action.item)
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
        return{
            items: updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartState
}

function CartProvider(props) {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)
    function addItemToCartHandler(item) {
        dispatchCart({ type: 'ADD', item: item })
    }

    function removeItemFromCartHandler(id) {

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider