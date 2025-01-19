import React from "react";
import {Row} from "../Types.ts";

interface Col{
    header: string,
    accessor: string
}
interface TableBodyProps{
    columns: Col[],
    data: Row[],
    setVis(s:boolean): void,
    setRow?(r:Row): void,
    classname?: string
}
const TableBody: React.FC<TableBodyProps> = ({columns,data, setVis,
                                                 setRow,
                                                 classname}) =>{
    const defaultStyle = `py-2 px-4 border-b border-cream text-gray-800 hover:text-white
      whitespace-pre break-words`;

    return(
        <tbody>
        {data.map((row) => (
            <tr key={row.id}
                className="even:bg-cream cursor-pointer hover:bg-camel"
                onClick={()=>{
                    if(setRow) setRow(row);
                    setVis(true);
                }
                }
            >

                {columns.map((column) => (
                    <td
                        key={column.accessor}
                        className={classname || defaultStyle}
                    >
                        {row[column.accessor]}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    )
}
export default TableBody;