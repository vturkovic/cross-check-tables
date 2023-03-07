import { useTable } from 'react-table';
 
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
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
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
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} >
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

export default TableComponent;