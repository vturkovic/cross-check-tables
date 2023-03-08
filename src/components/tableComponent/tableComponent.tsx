import ReactTable from "react-table";
import "react-table/react-table.css";
import { useState, useEffect } from "react";


const TableComponent = ({ data, columns }: any) => {

    const [pageSize, setPageSize] = useState(0);

    const VALUE_CLASS_MAP: {[key: string]: string} = {
      DA: 'green',
      green: 'green',
      NE: 'red',
      red: 'red',
      yellow: 'yellow',
    };
    
    useEffect(() => {
        setPageSize(data.length);
    }, [data]);

    const transformData = (arr: any[]) => {
        return arr.map((obj: any) => {
            const newObj: { [key: string]: any } = {};
            for (const prop in obj) {
                const value = obj[prop];
                if (typeof value === 'boolean') {
                    newObj[prop] = value ? 'DA' : 'NE';
                } else if (value === null) {
                    newObj[prop] = '-';
                } else if (value === '') {
                  newObj[prop] = '-';
                } else {
                    newObj[prop] = value;
                }
            }
            return newObj;
        });
    };

    const getRowClass = (value: string): string => {
      return VALUE_CLASS_MAP[value] ?? '';
    };
      
  return (
    <div className="table-container" style={{ overflowX: "auto" }}>
      <ReactTable
        data={transformData(data)}
        showPagination={false}
        pageSize={pageSize}
        className='-striped -highlight'
        columns={[
            ...columns.map((column:any) => {
              if (column.accessor === 'retroSurfaceSeen') {
                console.log('column', column)
                column.className = 'sticky border-right'
                column.headerClassName = 'sticky border-right'
              }
              return {
                ...column,
                Cell: ({ value}:any ) => (
                  <div className={getRowClass(value)}>
                    {value}
                  </div>
                )
              };
            })
          ]}
      />
    </div>
  );
};

export default TableComponent;