import DataTable from 'react-data-table-component';
import {
  HiAdjustments,
  HiCollection,
  HiDocumentReport,
  HiLogout,
  HiPencilAlt,
  HiSearch,
  HiTable,
  HiTrash,
  HiTrendingUp,
  HiUser,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { courses, lastUser, watchTime } from '../data';

const courseColumn = [
  {
    name: 'Title',
    selector: (row) => row.title,
    sortable: true,
    width: '300px',
  },
  {
    name: 'Instructor',
    selector: (row) => row.instructor,
    sortable: true,
    width: '130px',
  },
  {
    name: 'Description',
    selector: (row) => row.description,
    sortable: true,
    width: '300px',
  },
  {
    name: 'Enrolled Students',
    selector: (row) => row.enrollment,
    sortable: true,
    width: '150px',
    right: true,
  },
  {
    name: 'Action',
    selector: () => (
      <div className='flex flex-row gap-2'>
        <button className='p-2 text-white bg-yellow-500 rounded-md'>
          <HiPencilAlt />
        </button>
        <button className='p-2 text-white bg-red-500 rounded-md'>
          <HiTrash />
        </button>
      </div>
    ),
    width: '100px',
  },
];

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('level');
    navigate('/login');
  };

  return (
    <div className='flex'>
      <aside className='sticky top-0 flex-shrink-0 h-screen bg-yellow-500 border-0 border-r-2 w-max'>
        <div className='p-4 border-b px-7 '>
          <h1 className='p-1 text-lg font-bold text-white'>Online Courses</h1>
        </div>
        <div className='p-7'>
          <div className='flex gap-8 p-2 mb-6'>
            <img
              src='https://i.pravatar.cc/40?img=47'
              alt='UserProfile'
              className='self-center rounded-full '
            />
            <div className=''>
              <h2 className='text-[18px] text-white'>admin</h2>
              <p className='text-sm text-white opacity-75'>admin@email.com</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 py-4 h-[75vh]'>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiTable className='inline-block mr-2' size={20} /> Courses
            </a>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiTable className='inline-block mr-2' size={20} /> Users
            </a>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiDocumentReport className='inline-block mr-2' size={20} />{' '}
              Reports
            </a>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiUser className='inline-block mr-2' size={20} /> Profile
            </a>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiAdjustments className='inline-block mr-2' size={20} /> Settings
            </a>
            <p
              className='p-2 mt-auto mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
              onClick={handleLogout}
            >
              <HiLogout className='inline-block mr-2' size={20} /> Logout
            </p>
          </div>
        </div>
      </aside>

      <main className='w-full mx-auto '>
        <div className='p-4 shadow-md pb-[18px]'>
          <div className='flex flex-row'>
            <input
              type='text'
              className='p-1 border border-r-0 border-gray-300 rounded-md rounded-r-none w-80 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500'
            />
            <button className='p-2 bg-yellow-500 text-white rounded-r-md h-[34px]'>
              <HiSearch />
            </button>
            <div className='ml-auto'>
              <img
                src='https://i.pravatar.cc/35?img=47'
                alt='UserProfile'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
        <div className='px-[calc(1.5rem*0.5)]'>
          <div className='flex flex-row mt-2'>
            <div className='w-full pr-6 mb-12'>
              <div className='p-7'>
                <h3 className='mb-6 text-2xl font-bold'>Course List</h3>
                <div className='flex'>
                  <button className='p-2 ml-auto text-sm text-white bg-green-500 rounded-md'>
                    New Course
                  </button>
                </div>
                <DataTable
                  key={courses.id}
                  columns={courseColumn}
                  data={courses}
                  pagination
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
