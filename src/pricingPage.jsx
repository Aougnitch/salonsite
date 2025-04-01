import React from "react";

const TablePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <div className="w-full max-w-5xl">
        {/* Table 1 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">First Table</h2>
        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="w-full bg-slate-700 text-white rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-800 text-lg text-gray-300">
                {[...Array(4)].map((_, colIdx) => (
                  <th key={colIdx} className="p-4 border border-slate-600">Column {colIdx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, rowIdx) => (
                <tr key={rowIdx} className="odd:bg-slate-600 even:bg-slate-700 hover:bg-slate-500 transition">
                  {[...Array(4)].map((_, colIdx) => (
                    <td key={colIdx} className="p-4 border border-slate-600 text-center">
                      Row {rowIdx + 1}, Col {colIdx + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <h2 className="text-2xl font-semibold text-gray-800 my-8 text-center">Second Table</h2>
        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="w-full bg-slate-700 text-white rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-800 text-lg text-gray-300">
                {[...Array(4)].map((_, colIdx) => (
                  <th key={colIdx} className="p-4 border border-slate-600">Column {colIdx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, rowIdx) => (
                <tr key={rowIdx} className="odd:bg-slate-600 even:bg-slate-700 hover:bg-slate-500 transition">
                  {[...Array(4)].map((_, colIdx) => (
                    <td key={colIdx} className="p-4 border border-slate-600 text-center">
                      Row {rowIdx + 1}, Col {colIdx + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
