import React from "react";
import {Row} from "../Types.ts";
interface Col{
    header: string,
    accessor: string
}
interface HeaderProps{
    columns: Col[],
    setFilter({}): void,
    toggleShowDD(b?:boolean): void,
    classname?: string
}
const TableHeader: React.FC<HeaderProps> = ({columns, setFilter, toggleShowDD, classname}) =>{
    const defaultStyle = "py-2 px-4 bg-green border-b border-cream text-left cursor-pointer hover:bg-shadow";

    return(
        <thead>
        <tr>
            {columns.map(({accessor, header}) => (
                <th
                    key={accessor}
                    className={classname || defaultStyle}
                    onClick={()=>{
                        // might be an issue
                        setFilter((prevNote: Row) => ({...prevNote, ["column"]: accessor}) );
                        toggleShowDD();}
                    }
                >
                    {header}
                </th>
            ))}
        </tr>
        </thead>
    )
}
export default TableHeader;