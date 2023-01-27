import { useSelector } from 'react-redux';

import CardItem from './cardBagItem';
import * as Styled from '../styles/CardAside'

interface ICartItemsProps {
    cart: {
        items: {
            id: number,
            price: number,
            quantity: number,
            totalPrice: number,
            name: string
        }[],
        totalQuantity: number,
        changed: boolean
    };
}

export default function CardsFromBag() {
    const cartItems = useSelector((state: ICartItemsProps) => state.cart.items);

    let sumPrices = cartItems.map(price => price.totalPrice)
    let sum = 0;

    for (var i in sumPrices) {
        sum += sumPrices[i];
    }

    return (
        <Styled.Section>
            <ul>
                {cartItems.map((item) => (
                    <CardItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>

            <Styled.TotalDiv>
                <h2>Total:</h2>
                <h2>R${sum}</h2>
            </Styled.TotalDiv>
        </Styled.Section>
    );
};

