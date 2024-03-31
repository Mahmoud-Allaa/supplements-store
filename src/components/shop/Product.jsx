import Image from 'next/image'
export default function Product({ product, onClick }) {
    return (
        <div className='flex flex-col rounded drop-shadow bg-white w-[200px] overflow-hidden pt-2' onClick={onClick}>
            <Image src={product.img} alt={product.title} className="w-full h-[140px] object-contain" />
            <div className="flex flex-row justify-between gap-2 mt-3 bg-[#e9e9e9] px-2 py-1">
                <h3 className='text-[14px]'>{product.title}</h3>
                <span className='text-[14px]'>{product.price} L.E</span>
            </div>
        </div>
    )
}
