import { Box } from '@mui/material'
import Image from 'next/image'

export default function ProductDetails({ product, onClick }) {
    return (
        <Box sx={{ p: { xs: '20px', sm: '20px 50px' } }}>
            <Image src={product && product.img} alt={product && product.title} className="w-full h-[200px] bg-[white] border drop-shadow-sm mx-auto rounded object-contain" />
            <div className='flex flex-row items-center justify-between'>
                <h2 className="my-3 text-xl font-bold">{product && product.title}</h2>
                <span>{product && product.price} L.E</span>
            </div>
            <p>{product && product.desc}</p>
            <button onClick={onClick} className="btn bg-[#993737] rounded drop-shadow mt-10 text-white w-full">Add to card</button>
        </Box>
    )
}
