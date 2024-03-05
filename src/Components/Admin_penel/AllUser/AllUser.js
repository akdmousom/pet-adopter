'use client'
import { useMemo,useEffect, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';

const AllUser = ({ session }) => {
  const [userData, setUserData] = useState([]);
  const role = session.user.userRole;
  // console.log(userData,'userData')

  useEffect(() => {
    const userRole = { userRole: role };
    axios.post('https://pet-adopter-backend.vercel.app/api/v1/getUserDataCount', userRole)
      .then(res => setUserData(res.data))
      .catch(error => console.log(error));
  }, [role]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'fullName',
        header: 'Full Name',
        size: 150,
      },
      {
        accessorKey: 'userEmail',
        header: 'E-mail',
        size: 150,
      },
      {
        accessorKey: 'userPassword',
        header: 'Password',
        size: 200,
      },
      {
        accessorKey: 'userRole',
        header: 'User Role',
        size: 150,
      },
      {
        accessorKey: 'userId',
        header: 'User Id',
        size: 150,
      },
    ],
    [],
  );

  // Transform userData into the format expected by MaterialReactTable
  const tableData = useMemo(() => {
    return userData.map(user => ({
      fullName: user.fullName,
      userEmail: user.userEmail,
      userPassword: user.userPassword,
      userRole: user.userRole,
      userId: user._id,
    }));
  }, [userData]);

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return (
    <div className='m-5'>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default AllUser;
