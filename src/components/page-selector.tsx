import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight} from "react-icons/fa";
import { Element } from 'hast';

const StyledLink = ({
    href,
    children,
}:{
    href: string,
    children: React.ReactNode,
}): React.JSX.Element => {
    return (
        <Link href={href} className='flex justify-center items-center w-12 h-12 
        rounded-full bg-gray-800 hover:bg-[#d4d2d5] hover:text-gray-800 transition-all duration-200'>
            {children}
        </Link>   
    )
}

const PageNum = ({
    keyword,
    index,
    total,
    limit,
}:{
    keyword: string,
    index: number,
    total: number,
    limit: number,
}): React.JSX.Element => {
    if(index+1 > 0 && index*limit < total){
        return (
            <StyledLink href={`?keyword=${keyword}&index=${index}`}>
                {index+1}
            </StyledLink>
        )
    }else 
        return ( 
            // deactivated link
            <Link href={`?keyword=${keyword}`} className='flex justify-center items-center w-12 h-12 
            rounded-full bg-[#1c1c29] pointer-events-none'> 
            </Link>
        )
}

const PageSelector = ({
    keyword,
    index,
    limit,
    total,
}: {
    keyword: string,
    index: number,
    limit: number,
    total: number,
}): React.JSX.Element => {
    const pageIndexOffset: number[] = [-2,-1,0,1,2];
    return (
        <div className="flex justify-between w-full mt-4 h-15">
        <StyledLink href={`?keyword=${keyword}&index=0`}>
            <FaAngleDoubleLeft />
        </StyledLink>
        <StyledLink href={`?keyword=${keyword}&index=${Math.max(0, index-1)}`}>
            <FaAngleLeft />
        </StyledLink>
        {pageIndexOffset.map((num) => (<PageNum key={num} keyword={keyword} index={index+num} limit={limit} total={total}/>))}
        <StyledLink href={`?keyword=${keyword}&index=${Math.min(index+1, Math.floor(Math.max(total-1, 0)/limit))}`}>
            <FaAngleRight />
        </StyledLink>
        <StyledLink href={`?keyword=${keyword}&index=${Math.floor(Math.max(total-1, 0)/limit)}`}>
            <FaAngleDoubleRight />
        </StyledLink>
        </div>
    )
}

export default PageSelector;