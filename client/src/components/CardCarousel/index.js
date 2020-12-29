import React, { Component, useEffect, useStyles } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css'
import Card from '../Card';
import API from '../../utils/ProductAPI'
const items = [];
const productList = new API();
export function itemLoading() {
    const classes = useStyles();
    const [items, setItems] = useState([])
    useEffect(() => {
        loadItems()
    }, [])
    function loadItems() {
        productList.getProducts().then(results =>
            setItems(results)
        )
            .catch(err => console.log(err))
    }
}


// Need to incorporate the item info above with the Card info below
export const Menu = (list, selected) =>
    list.map(el => {
        const { name } = el;
        return <Card text={name} key={name} selected={selected} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const selected = 'item1';
class App extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }
    state = {
        selected
    };
    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;
        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}