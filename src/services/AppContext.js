import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                bag: [...state.bag, action.payload],
                itemsInBag: state.bag.length + 1,
            };
        case 'CLEAR_BAG':
            return {
                ...state,
                bag: state.bag.splice(0, state.bag.length),
                itemsInBag: state.bag.length,
            };
        case 'INCREASE_ITEM':
            return {
                ...state,
                bag: [...state.bag, action.payload],
                itemsInBag: state.bag.length + 1,
            };
            case 'DECREASE_ITEM':
                return {
                    ...state,
                    bag: [...state.bag, action.payload],
                    itemsInBag:  state.bag.length - 1,
                };
        default:
            return state;
    }
};

let initialState = {
    itemsInBag: 0,
    bag: [],
    products: [
        { id: 1, name: "Kid's 2pk Cloth Face masks", price: 185000, discount: 0, info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: 2, name: "Norbury Scandinavian Wood Leg Ottoman", price: 148000, discount: 20, info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: 3, name: "Baby-Cut Carrots - 1lb - Good & Gather", price: 4000, discount: 5, info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: 4, name: "Metal Country Chalet Charm and Wood Bench - Scarina Home", price: 34000, discount: 0, info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: 5, name: "Alternative Protein Ground - 16oz - Good & Gather", price: 8000, discount: 0, info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                itemsInBag: state.itemsInBag,
                bag: state.bag,
                products: state.products,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}