import successImage from '../assets/wemabank.png'
import pendingImage from '../assets/opay.png'
import failedImage from '../assets/mtn.png'


const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'successful':
        return 'bg-green-200 text-green-600 font-bold rounded';
      case 'pending':
        return 'bg-yellow-200 text-yellow-500 rounded font-bold';
      case 'failed':
        return 'bg-red-200 text-red-600 rounded font-bold';
      default:
        return ''; // Default style if status is not recognized
    }
  };
  
  const getStatusText = (status: string) => {
    // You can customize the status text if needed
    return status;
  };
  
  const getStatusImage = (status: string) => {
    switch (status.toLowerCase()) {
      case 'successful':
        return successImage;
      case 'pending':
        return pendingImage;
      case 'failed':
        return failedImage;
      default:
        return ''; // Default image if status is not recognized
    }
  };
  
const MyTable: React.FC<MyTableProps> = ({ data }) => {
    return (
        <div className="max-w-full overflow-x-auto">
          <table className="sticky text-left text-black text-xs md:text-md md:text-left md:w-full px-5 dark:text-white rounded-xl">
            <thead className="w-full text-gray-500 md:text-gray-300 border border-x-0 border-y-0">
          <tr>
            <th className='p-4 mr-7 '>Name</th>
            <th className='p-4 mr-7 '>Transaction Type</th>
            <th className='p-4 mr-7 '>Date</th>
            <th className='p-4 mr-7 '>Amount</th>
            <th className='p-4 mr-7 '>Status</th>
          </tr>
        </thead>
        <tbody className='border border-gray-300 border-x-0'>
        {data.map((row, index) => (
            <tr key={index} className='border border-x-0'>
              <td className='flex items-center gap-2 p-5 mr-7'>
              <img src={getStatusImage(row.status)}
                alt={row.status} />
              {row.name}</td>
              <td className='p-4 mr-7'>{row.transactionType}</td>
              <td className='p-4 mr-7'>{row.date}</td>
              <td className='p-4 mr-7'>{row.amount}</td>
              <td className='p-4 mr-7'><a href="" className={`py-2 px-4 ${getStatusStyle(row.status)}`}>
              {getStatusText(row.status)}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      
    );
  };
  
  export default MyTable;