import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({ product }) {
    console.log(product);

    return (
        <div className='w-full h-[80px] drop-shadow bg-[white] flex flex-row items-center gap-3 p-2 rounded'>
            <div className='w-[60px] h-[60px] bg-[lightgray] rounded' />
            <div className="flex flex-col justify-between h-full grow">
                <div className="flex flex-row items-center justify-between">
                    <h2>{product && `${product.title} ( ${product.price} L.E )`}</h2>
                    <IconButton sx={{ p: 0 }} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <button className='w-[24px] h-[24px] flex items-center justify-center bg-[lightgray] rounded'>-</button>
                        <span>{product && product.quantity}</span>
                        <button className='w-[24px] h-[24px] flex items-center justify-center bg-[lightgray] rounded'>+</button>
                    </div>
                    <span>{product && (product.price * product.quantity)} L.E</span>
                </div>
            </div>
        </div>
    )
}
