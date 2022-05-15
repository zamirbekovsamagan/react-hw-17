import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const cartCtx = useContext(CartContext)
    function addToCartHandler(amount) {
        cartCtx.items.filter(item => {
            if (props.id === item.id) {
                return {
                    id: item.id,
                    name: item.name,
                    amount: amount,
                    total: item.total += amount,
                    price: props.price
                }
            }
        })
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            total: amount,
            price: props.price
        })
    }
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAmountAdd={addToCartHandler} id={props.id} />
            </div>
        </li>
    )
}

export default MealItem