
import SearchIcon from '@mui/icons-material/Search';
export default function SearchField() {
    return (
        <div className='relative w-[170px] md:w-[250px]'>
            <input type="search" placeholder="Search" className="pl-[32px] py-1 rounded skew-x-[-10deg] w-full bg-[#EFEFEF] text-[black] outline-0" />
            <SearchIcon sx={{ position: 'absolute', left: '6px', top: '4px', color: 'gray' }} />
        </div>
    )
}
