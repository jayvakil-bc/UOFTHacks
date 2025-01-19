import React from 'react';
import TableHeader from "./TableHeader.tsx";
import TableBody from "./TableBody.tsx";
import {Row} from "../Types.ts";

const defaultTableContainerStyle = "max-w-11/12 h-5/6 overflow-auto";
const defaultTableStyle = "bg-beige border border-camel text-sm";


interface Col{
    header: string,
    accessor: string
}
interface TableContent{
    columns: Col[],
    data: Row[],
    setFilter({}): void,
    setVis: (s:boolean)=>void,
    toggleShowDD(b?:boolean): void,
    setRow: (u:Row)=>void,
}

export const Table: React.FC<TableContent> = ({ columns, data, setVis, setRow,setFilter,toggleShowDD }) => {
    return (
        <div>
            <div className={defaultTableContainerStyle}>
                <table className={defaultTableStyle}>
                    <TableHeader columns={columns} setFilter={setFilter} toggleShowDD={toggleShowDD}></TableHeader>
                    <TableBody columns={columns} data={data} setRow={setRow} setVis={setVis}></TableBody>
                </table>
            </div>
        </div>
    );
};