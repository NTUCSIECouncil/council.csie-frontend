import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight} from "react-icons/fa";

// 讓上/下一頁不要out of range

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
    console.log(index, index*limit)
    if(index+1 > 0 && index*limit < total){
        return (
            <Link href={`?keyword=${keyword}&index=${index}`}>
                {index+1}
            </Link>
        )
    }else
        return (
            <Link href={`?keyword=${keyword}`}>
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
    console.log(total); 
    const pageIndexOffset: number[] = [-2,-1,0,1,2];
    return (
        <div className="flex justify-between w-full mt-4 h-10">
        <Link href={`?keyword=${keyword}&index=0`}>
            <FaAngleDoubleLeft />
        </Link>
        <Link href={`?keyword=${keyword}&index=${Math.max(0, index-1)}`}>
            <FaAngleLeft />
        </Link>
        {pageIndexOffset.map((num) => (<PageNum key={num} keyword={keyword} index={index+num} limit={limit} total={total}/>))}
        <Link href={`?keyword=${keyword}&index=${Math.min(index+1, Math.floor(Math.max(total-1, 0)/limit))}`}>
            <FaAngleRight />
        </Link>
        <Link href={`?keyword=${keyword}&index=${Math.floor(Math.max(total-1, 0)/limit)}`}>
            <FaAngleDoubleRight />
        </Link>
        </div>
    )
}

export default PageSelector;