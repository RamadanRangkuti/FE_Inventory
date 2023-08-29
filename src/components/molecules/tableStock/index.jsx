// import { useEffect, useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import {getListStockThunk} from "../../../store/stock/action"
import PropTypes from "prop-types"

const TableStock = ({stockList}) => {
  return(
    <>
       <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    type
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    User Name
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Note
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    QTY
                  </th>
                </tr>
           </thead>
          <tbody className="divide-y divide-gray-200">
            {stockList.map((item,i) => (
              <tr key={i}>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.dates}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.names}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.type == 1 ? "Stok In" : item.type == 2 ? "Stock Out" : item.type == 3 ? "Stock Edit" : ""}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.note}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

//mendaftarkan props beserta tipe datanya
TableStock.propTypes = {
  stockList: PropTypes.array
}

export default TableStock