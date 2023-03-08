import ReactTable from "react-table";
import "react-table/react-table.css";
import { useState, useEffect } from "react";


const TableComponent = ({ data, columns }: any) => {

    const [pageSize, setPageSize] = useState(0);

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
                } else {
                    newObj[prop] = value;
                }
            }
            return newObj;
        });
    };
      
  return (
    <div className="table-container" style={{ overflowX: "auto" }}>
      <ReactTable
        data={transformData(data)}
        showPagination={false}
        pageSize={pageSize}
        className="-striped -highlight"
        columns={[
            ...columns.map((column:any) => {
              return {
                ...column,
                Cell: ({ value}:any ) => (
                  <div className={`${value === 'DA' ? 'green': (value === 'NE' ? 'red': '')}`}>
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