import React from "react";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      {/* Table 1 */}
      <h2 className="text-xl font-bold mb-4">First Table</h2>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full bg-slate-700 text-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-800">
              {[...Array(4)].map((_, colIdx) => (
                <th key={colIdx} className="p-3 border border-slate-600">Column {colIdx + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, rowIdx) => (
              <tr key={rowIdx} className="odd:bg-slate-600 even:bg-slate-700">
                {[...Array(4)].map((_, colIdx) => (
                  <td key={colIdx} className="p-3 border border-slate-600 text-center">
                    Row {rowIdx + 1}, Col {colIdx + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table 2 */}
      <h2 className="text-xl font-bold my-6">Second Table</h2>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full bg-slate-700 text-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-800">
              {[...Array(4)].map((_, colIdx) => (
                <th key={colIdx} className="p-3 border border-slate-600">Column {colIdx + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, rowIdx) => (
              <tr key={rowIdx} className="odd:bg-slate-600 even:bg-slate-700">
                {[...Array(4)].map((_, colIdx) => (
                  <td key={colIdx} className="p-3 border border-slate-600 text-center">
                    Row {rowIdx + 1}, Col {colIdx + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingPage;