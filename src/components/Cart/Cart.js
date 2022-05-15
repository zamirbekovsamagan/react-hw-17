import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {
    const cartCtx = useContext(CartContext)
    let cartList = cartCtx.items.filter((item, index) => index === cartCtx.items.findIndex(elem => elem.id === item.id))
    let totalprice = cartList.reduce((total, el) => { return total + (el.total * el.price) }, 0)
    let totalamount = cartList.reduce((total, item) => { return total + item.total }, 0)

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <ul>
                {cartList.map(food => {
                    return (
                        <li key={food.id} className={classes.list}>
                            <div className={classes.total}>
                                <h4>{food.name}</h4>
                                <span>{food.total}</span>
                                <span>{`$${(food.price * food.total).toFixed(2)}`}</span>
                            </div>
                        </li>
                    )

                })}
                <div className={classes.totalprice}>
                    <h2>Total - {totalamount}</h2>
                    <h2>To pay -- ${totalprice.toFixed(2)}</h2>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onCloseCart}>
                        Close
                    </button>
                    <button className={classes.button}>Order</button>
                </div>
            </ul>
        </Modal>
    )
}

export default Cart