import React from "react";

export default function CartContext() {
    React.createContext({
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {}
    });
}