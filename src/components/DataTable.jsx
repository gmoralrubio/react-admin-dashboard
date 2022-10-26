import Card from './common/Card'
import CardTitle from './common/CardTitle'
import Status from './common/Status'
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../fakeData'
import { CgEye, CgTrash } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Button from './common/Button'
import colors from 'tailwindcss/colors'
import { ThemeContext } from './../context/ThemeContext'
import { useContext, useState } from 'react'

export default function DataTable() {
  const { isDark } = useContext(ThemeContext)
  const [data, setData] = useState(userRows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  const userColumns = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    {
      field: 'username',
      headerName: 'User name',
      flex: 1,
      renderCell: params => (
        <>
          <img
            src={params.row.img}
            alt={params.row.username}
            className="mr-4 w-10 rounded-full"
          />
          <span>{params.row.username}</span>
        </>
      ),
    },

    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 0.3,
      type: 'numeric',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      renderCell: params => (
        <Status status={params.row.status}>{params.row.status}</Status>
      ),
    },

    {
      field: 'action',
      headerName: 'Action',
      flex: 0.3,
      sortable: false,
      renderCell: params => (
        <div className="flex gap-4">
          <Link to="/users/test">
            <CgEye size={24} color={'#818cf8'} />
          </Link>
          <Link>
            <CgTrash
              size={24}
              color={'#ef4444'}
              onClick={() => handleDelete(params.row.id)}
            />
          </Link>
        </div>
      ),
    },
  ]

  return (
    <Card className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <CardTitle>Data table</CardTitle>
        <Link to="/users/new">
          <Button text={'Add new user'} size={'sm'} />
        </Link>
      </div>
      <div className="h-[631px] w-full">
        <DataGrid
          rows={data}
          columns={userColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          style={isDark ? { borderColor: colors.gray[600], color: colors.gray[400] } : {}}
        />
      </div>
    </Card>
  )
}
