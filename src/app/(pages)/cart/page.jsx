
import CartItem from "@/components/cart/CartItem";
import React from "react";

export default function Page() {
    const products = [{ title: 'Product 1', price: 2000, quantity: 1 }, { title: 'Product 2', price: 1000, quantity: 2 }, { title: 'Product 3', price: 500, quantity: 3 }]
    return (
        <main className="p-[20px]">
            <div className="flex flex-col items-center gap-[20px] max-w-[500px] mx-auto">
                <h1>Cart</h1>
                {products.map((p, i) => (
                    <CartItem key={i} product={p} />
                ))}
                <button className="btn bg-[#993737] drop-shadow rounded w-full text-white hover:drop-shadow-lg mt-[24px]" >Checkout</button>
            </div>
        </main>
    )
}
