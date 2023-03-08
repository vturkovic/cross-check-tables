/* import { useTable } from 'react-table';
 
const TableComponent = ({ columns, data }: any) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="table-container" style={{ overflowX: 'auto' }}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, index) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className={index < 8 ? "sticky" : ""}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row);
                        const rowClassName = index % 2 === 0 ? 'even' : 'odd';
                        return (
                            <tr {...row.getRowProps()} className={rowClassName}>
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className={index < 8 ? "sticky" : ""}
                                        >
                                            {cell.value !== null ? cell.render('Cell') : '-'}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default TableComponent; */

import ReactTable from "react-table";
import "react-table/react-table.css";

const TableComponent = ({ data, columns }: any) => {

  return (
    <div className="table-container" style={{overflowX: 'auto'}}>
      <ReactTable
        data={data}
        showPagination={false}
        defaultPageSize={5}
        className="-striped -highlight"
        columns={columns} />
    </div>
  );
};

export default TableComponent;