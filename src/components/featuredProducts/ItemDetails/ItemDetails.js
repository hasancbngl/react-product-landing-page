import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { DataConText } from '../../../context/context';
import { StyledSpan } from '../featuredProductsStyling';
import Colors from './Colors';
import { MainStyle, CardItemDiv, StyledButton} from './ItemDetailsStyles';

export default class ItemDetails extends Component {
    static contextType = DataConText;
    state= {
        product:[]
    }

    getProduct=() => {
        const id = this.props?.match?.params?.id ?? 'hello';
        if(id) {
            const res = id <10 ? this.context.state.products : this.context.state.bestSellerProducts;
            const data = res.filter(item=> {
                return item.id === id;
            });
            this.setState({product: data});
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const product = this.state.product;
        return (
            <MainStyle>
        {
            product.map(item => (
                <CardItemDiv key={item.id}>
                    <img src={item.src} alt={item.title} />
                    <>
                        <div>
                            <h3>{item.title}</h3>
                            <StyledSpan >₺{item.price}</StyledSpan>
                        </div>
                        <Colors colors={item.colors}/>
                        <p>{item.brand}</p>
                        <p>Morbi in ligula lacus. Cras feugiat lacus ipsum, quis gravida elit commodo ut. Ut posuere fermentum elit, eget aliquet ante consectetur quis. Quisque magna ipsum, molestie ac elit eu, tempor dictum urna. Duis vel laoreet nulla. Nullam eget mollis urna. Etiam scelerisque lacus consectetur massa iaculis, sit amet vehicula ligula pretium. Pellentesque sollicitudin et risus sit amet mollis. Ut convallis nibh id turpis efficitur, a eleifend lorem cursus.</p>
                        <Link to={`/cart`}>
                            <StyledButton>Add to Card</StyledButton>
                        </Link>
                    </>
                </CardItemDiv>
            ))
        }
        </MainStyle>
        )
    }
}