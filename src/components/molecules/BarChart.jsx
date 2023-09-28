// import { Chart as ChartJS, BarElement } from "chart.js"
// import { Bar } from "react-chartjs-2"

// ChartJS.register(
//   BarElement
// )
const data = [
  { label: 'Item 1', value: 5 },
  { label: 'Item 2', value: 8 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 12 },
];

const BarChart = () => {
  return(
    <>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map(item => (
          <div key={item.label} className="flex items-center">
            <div className="w-12 bg-blue-500 h-8"></div>
            <div className="ml-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default BarChart