import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { deleteUsersThunk } from "../../../store/user/actions";
const TableUser = ({userList: initialUserList}) =>{ 
  const dispatch = useDispatch();

  const [userList, setUserList] = useState(initialUserList);
  const handleDelete = (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      dispatch(deleteUsersThunk(userId))
        .then(() => {
          setUserList(prevList => prevList.filter(item => item.id_user !== userId));
        })
        .catch((error) => {
          console.log("Delete user Error:", error);
        });
    }
  }
  return(
    <>
      <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Fullname
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Picture
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
           </thead>
          <tbody className="divide-y divide-gray-200">
            {userList.map((item,i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">{item.fullname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={`http://localhost:5000/uploads/images/${item.picture}`} alt={item.name} className="h-10 w-10 rounded-xl" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/updateUser/${item.id_user}`} className="px-2 bg-sky-300 p-2 rounded-xl mx-2">Update</Link>
                  <button onClick={() => handleDelete(item.id_user)} className="px-2 bg-rose-400 p-2 rounded-xl">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

//mendaftarkan props beserta tipe datanya
TableUser.propTypes = {
  userList: PropTypes.array
}

export default TableUser