'use client'

import HeroShop from "@/components/shop/HeroShop";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductDetails from "@/components/shop/ProductDetails";
import CustomDrower from "@/components/shared/CustomDrower";
import img from '@/assets/1.webp'
import Product from "@/components/shop/Product";



export default function Page() {
    const [tab, setTab] = useState(0)
    const [filter, setFilter] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    const tabs = ['all', 'Fat Loss', 'Gain Muscle', 'Get Energetic']
    const products = {
        fatLoss: [
            { img, title: 'Product 1', price: 1000, desc: 'desc 1' },
            { img, title: 'Product 2', price: 2000, desc: 'desc 2' },
            { img, title: 'Product 3', price: 3000, desc: 'desc 3' },
        ],
        gainMuscle: [
            { img, title: 'Product 4', price: 1000, desc: 'desc 4' },
            { img, title: 'Product 5', price: 2000, desc: 'desc 5' },
            { img, title: 'Product 6', price: 3000, desc: 'desc 6' },
        ],
        getEnergetic: [
            { img, title: 'Product 7', price: 1000, desc: 'desc 7' },
            { img, title: 'Product 8', price: 2000, desc: 'desc 8' },
            { img, title: 'Product 9', price: 3000, desc: 'desc 9' },
        ],
        all: [
            { img, title: 'Product 1', price: 1000, desc: 'desc 1' },
            { img, title: 'Product 2', price: 2000, desc: 'desc 2' },
            { img, title: 'Product 3', price: 3000, desc: 'desc 3' },
            { img, title: 'Product 4', price: 1000, desc: 'desc 4' },
            { img, title: 'Product 5', price: 2000, desc: 'desc 5' },
            { img, title: 'Product 6', price: 3000, desc: 'desc 6' },
            { img, title: 'Product 7', price: 1000, desc: 'desc 7' },
            { img, title: 'Product 8', price: 2000, desc: 'desc 8' },
            { img, title: 'Product 9', price: 3000, desc: 'desc 9' },
        ]
    }


    const openProduct = (p) => {
        handleDrawerToggle()
        setSelectedProduct(p)
    }

    const handleChange = (event) => {
        setFilter(event.target.value);
        setTab(event.target.value);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        setSelectedProduct({})
    };


    const selectFilter = (
        <Box sx={{ minWidth: 120, display: { sm: 'none' } }}>
            <FormControl fullWidth size="small">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    onChange={handleChange}
                    sx={{ padding: '4px 10px', bgcolor: '#993737', color: 'white' }}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Fat Loss</MenuItem>
                    <MenuItem value={2}>Gain Muscle</MenuItem>
                    <MenuItem value={3}>Get Energetic</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )

    return (
        <main className="">
            <HeroShop />
            <section className="py-5 px-[24px] md:px-[70px]">
                <div className="flex flex-row gap-[16px] justify-between my-[32px] font-[500] max-w-[55rem] mx-auto">
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {tabs.map((t, i) => (
                            <button key={i} onClick={() => setTab(i)} className={`px-[8px] md:px-3 py-1 ${i == tab ? 'bg-[#993737] text-white' : 'bg-[lightgray]'} rounded skew-x-[-9deg] mr-3`}>{t}</button>
                        ))}
                    </Box>
                    {selectFilter}
                </div>
                <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 max-w-[55rem] mx-auto">
                    {tab == 0 && products.all.map((p, i) => (
                        <Product key={i} product={p} className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" onClick={() => openProduct(p)} />
                    ))}
                    {tab == 1 && products.fatLoss.map((p, i) => (
                        <Product key={i} product={p} className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" onClick={() => openProduct(p)} />
                    ))}
                    {tab == 2 && products.gainMuscle.map((p, i) => (
                        <Product key={i} product={p} className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" onClick={() => openProduct(p)} />
                    ))}
                    {tab == 3 && products.getEnergetic.map((p, i) => (
                        <Product key={i} product={p} className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" onClick={() => openProduct(p)} />
                    ))}
                </div>

                {/* product drower */}
                <CustomDrower isOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} >
                    <ProductDetails product={selectedProduct} onClick={handleDrawerToggle} />
                </CustomDrower>

            </section>
        </main>
    )
}
