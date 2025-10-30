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
        <Link href={href} className='font-bold flex justify-center items-center w-12 h-12 
        rounded-full bg-gray-800 hover:bg-[#d4d2d5] hover:text-gray-800 transition-all duration-200'>
            {children}
        </Link>   
    )
}

const PageNum = ({
    baseParams,
    index,
    index_off,
    total,
    limit,
}:{
    baseParams: string,
    index: number,
    index_off: number,
    total: number,
    limit: number,
}): React.JSX.Element => {
    const newindex: number = index + index_off;
    if(newindex+1 > 0 && newindex*limit < total){
        if(index_off === 0)
            return ( 
                <Link href={`?${baseParams}`} className='font-bold flex justify-center items-center w-12 h-12 
                rounded-full bg-[#d4d2d5] text-gray-800 pointer-events-none'> 
                    {index+1}
                </Link>
            )
        else
            return (
                <StyledLink href={`?${baseParams}index=${newindex}`}>
                    {newindex+1}
                </StyledLink>
            )
    }else 
        return ( 
            // deactivated link
            <Link href={`?${baseParams}`} className='font-bold flex justify-center items-center w-12 h-12 
            rounded-full bg-[#1c1c29] pointer-events-none'> 
            </Link>
        )
}

const PageSelector = ({
    baseParams, // for example, "keyword=123&", or "keyword=123&group=456&", or simply ""
    index,
    limit,
    total,
}: {
    baseParams: string,
    index: number,
    limit: number,
    total: number,
}): React.JSX.Element => {
    const pageIndexOffset: number[] = [-2,-1,0,1,2];
    return (
        <div className="flex justify-between w-full mt-4 h-15 relative z-10 max-w-200">
        <StyledLink href={`?${baseParams}index=0`}>
            <FaAngleDoubleLeft />
        </StyledLink>
        <StyledLink href={`?${baseParams}index=${Math.max(0, index-1)}`}>
            <FaAngleLeft />
        </StyledLink>
        {pageIndexOffset.map((num) => (<PageNum key={num} baseParams={baseParams} index={index} index_off={num} limit={limit} total={total}/>))}
        <StyledLink href={`?${baseParams}index=${Math.min(index+1, Math.floor(Math.max(total-1, 0)/limit))}`}>
            <FaAngleRight />
        </StyledLink>
        <StyledLink href={`?${baseParams}index=${Math.floor(Math.max(total-1, 0)/limit)}`}>
            <FaAngleDoubleRight />
        </StyledLink>
        </div>
    )
}

export default PageSelector;