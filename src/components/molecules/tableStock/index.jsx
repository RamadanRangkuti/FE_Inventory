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
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product_id
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    type
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    user_id
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    note
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    qty
                  </th>
                </tr>
           </thead>
          <tbody className="divide-y divide-gray-200">
            {stockList.map((item,i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">{item.dates}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.product_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.user_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.note}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.qty}</td>
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