import {
  HiAdjustments,
  HiCollection,
  HiLogout,
  HiSearch,
  HiTrendingUp,
  HiUser,
} from 'react-icons/hi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { lastUser, userCourses, watchTime } from '../data';

function UserDashboard() {
  return (
    <div className='flex'>
      <aside className='sticky top-0 w-1/4 h-screen bg-yellow-500 border-0 border-r-2'>
        <div className='p-4 border-b px-7 '>
          <h1 className='p-1 text-lg font-bold text-white'>Online Courses</h1>
        </div>
        <div className='p-7'>
          <div className='flex gap-8 p-2 mb-6 text-center'>
            <img
              src='https://i.pravatar.cc/40?img=13'
              alt='UserProfile'
              className='self-center rounded-full '
            />
            <div className=''>
              <h2 className='text-[18px] text-white'>user</h2>
              <p className='text-sm text-white opacity-75'>user@email.com</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 py-4 h-[75vh]'>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiTrendingUp className='inline-block mr-2' size={20} /> Progress
            </a>
            <a
              href='#'
              className='p-2 mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiCollection className='inline-block mr-2' size={20} /> My
              Courses
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
            <a
              href='#'
              className='p-2 mt-auto mb-4 leading-none text-white align-bottom rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 active:bg-white active:text-yellow-500'
            >
              <HiLogout className='inline-block mr-2' size={20} /> Logout
            </a>
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
                src='https://i.pravatar.cc/35?img=13'
                alt='UserProfile'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
        <div className='px-[calc(1.5rem*0.5)]'>
          <div className='flex flex-row mt-2'>
            <div className='w-[42%] pr-6 mb-12'>
              <div className='p-7'>
                <h3 className='mb-6 text-2xl font-bold'>Active Progress</h3>
                {userCourses.map((data, index) => (
                  <div key={index} className='mb-7'>
                    <div className='flex flex-row mt-1 flex-nowrap'>
                      <div className='w-1/3'>
                        <a href='#'>
                          <img
                            src={data.picture}
                            alt='CourseImage'
                            className='align-middle rounded-md'
                            width={95}
                            height={60}
                          />
                        </a>
                      </div>
                      <div className='w-2/3 pl-2'>
                        <a href='#'>
                          <h3 className='text-lg font-medium'>{data.title}</h3>
                        </a>
                      </div>
                    </div>
                    <div className='box-border flex flex-row items-center justify-center gap-3 mt-4'>
                      <div className='flex-auto bg-gray-300 rounded-md'>
                        <div
                          className={`h-2 bg-yellow-500 w-[${data.percent}] rounded-md`}
                        ></div>
                      </div>
                      <p className='text-sm text-right text-gray-400'>
                        {data.progress}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-[58%] pr-6 mb-12'>
              <div className='p-7'>
                <h3 className='text-2xl font-bold'>Top 2 Last 7 Days</h3>
                {/* <div className='mt-6'>
                    <ul>
                      <li className='pt-2 text-lg'>Front-End</li>
                      <li className='pt-2 text-lg'>Back-End</li>
                      <li className='pt-2 text-lg'>Business</li>
                    </ul>
                  </div> */}
                <LineChart
                  width={500}
                  height={300}
                  data={lastUser}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis type='category' dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign='top' height={36} />
                  <Line
                    type='monotone'
                    dataKey='frontEnd'
                    name='Front-End'
                    stroke='#E69216'
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type='monotone'
                    dataKey='backEnd'
                    name='Back-End'
                    stroke='#3AD876'
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
              <div className='p-7'>
                <h3 className='text-2xl font-bold'>Watch Time</h3>
                {/* <div className='mt-6'>
                    <ul>
                      <li className='pt-2 text-lg'>Front-End</li>
                      <li className='pt-2 text-lg'>Back-End</li>
                      <li className='pt-2 text-lg'>Business</li>
                    </ul>
                  </div> */}
                <LineChart
                  width={500}
                  height={300}
                  data={watchTime}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis type='number' domain={[0, 'auto']} />
                  <Tooltip
                    formatter={(value) => {
                      return `${value} minutes`;
                    }}
                  />
                  <Legend verticalAlign='top' height={36} />
                  <Line
                    type='monotone'
                    dataKey='time'
                    name='Last 7 Days'
                    stroke='#E69216'
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;
