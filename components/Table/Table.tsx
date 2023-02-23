import React, { FC } from 'react';

type TableTypes = {
  header: {
    title: string;
  }[];
  rows: {
    row: string[] | number[];
  }[];
};

const Table: FC<TableTypes> = ({ header, rows }) => {
  return (
    <div>
      {header ? (
        <div
          className="bg-obGray grid gap-6 items-center text-white font-bold rounded-xl px-6 py-2 mb-4 shadow-lg relative overflow-hidden"
          style={{
            gridTemplateColumns: `${header.map((_) => `1fr`).join(' ')}`,
          }}
        >
          {header.map(({ title }, index) => (
            <div key={`table_header_${index}_${title}`} className="z-10">
              {title}
            </div>
          ))}
          <div className="absolute bg-obGreen rounded-full w-[320px] h-[320px] blur-[200px] top-0 left-[-60px]"></div>
          <div className="absolute bg-red-500/80 rounded-full w-[220px] h-[220px] blur-[150px] top-0 right-[-60px] opacity-50"></div>
        </div>
      ) : null}

      {rows
        ? rows.map(({ row }, rowIndex) => (
            <div
              key={`row_index_${rowIndex}`}
              className="bg-obGreen grid gap-6 items-center text-white rounded-xl px-6 py-4 mb-4 shadow-lg relative overflow-hidden"
              style={{
                gridTemplateColumns: `${row.map((_) => `1fr`).join(' ')}`,
              }}
            >
              {row
                ? row.map((item, itemIndex) => (
                    <div key={`row_item_index_${itemIndex}`} className="z-10">
                      {item}
                    </div>
                  ))
                : null}
              <div className="absolute bg-obGray rounded-full w-[220px] h-[220px] blur-[100px] top-0 left-[-60px] opacity-50"></div>
              <div className="absolute bg-red-500/80 rounded-full w-[220px] h-[220px] blur-[150px] bottom-0 right-[-60px] opacity-80"></div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Table;
