'use client'

import { useState } from "react"
import Product from "../shop/Product"
import ProductDetails from "../shop/ProductDetails";

import img from '@/assets/1.webp'
import CustomDrower from "../shared/CustomDrower";


export default function ShopByGoal() {
    const [selectedProduct, setSelectedProduct] = useState({ title: 'Product 1', price: 2000, desc: ' lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' });
    const [tab, setTab] = useState(0)
    const [mobileOpen, setMobileOpen] = useState(false);

    const tabs = ['Fat Loss', 'Gain Muscle', 'Get Energetic']
    const products = [
        { img, title: 'Product 1', price: 1000, desc: 'desc 1' },
        { img, title: 'Product 2', price: 2000, desc: 'desc 2' },
        { img, title: 'Product 3', price: 3000, desc: 'desc 3' },
        { img, title: 'Product 4', price: 4000, desc: 'desc 4' },
        { img, title: 'Product 5', price: 5000, desc: 'desc 5' },
    ]




    const openProduct = (p) => {
        handleDrawerToggle()
        setSelectedProduct(p)
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        console.log(mobileOpen);
    };

    return (
        <section className="p-[32px] md:p-[70px]">
            <h2 className="text-black font-[500] text-3xl text-center">SHOP BY <span className="text-[#993737]">GOAL</span></h2>
            <div className="flex flex-row gap-[16px] justify-center my-[32px] font-[500]">
                {tabs.map((t, i) => (
                    <button key={i} onClick={() => setTab(i)} className={`px-[8px] md:px-3 py-1 ${i == tab ? 'bg-[#993737] text-white' : 'bg-[lightgray]'} rounded skew-x-[-9deg]`}>{t}</button>
                ))}
            </div>
            <div className="slider w-[full] overflow-auto pb-5">
                <div className="flex flex-row gap-[10px] md:gap-[24px] w-[fit-content] p-1">
                    {products.map((p, i) => (
                        <>
                            <Product key={i} product={p} onClick={() => openProduct(p)} />
                        </>
                    ))}
                </div>
            </div>

            {/* product drower */}
            <CustomDrower isOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} >
                <ProductDetails product={selectedProduct} onClick={handleDrawerToggle} />
            </CustomDrower>
        </section>
    )
}
