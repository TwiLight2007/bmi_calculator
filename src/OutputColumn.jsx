import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Scatter,
  ResponsiveContainer,
  Area,
  ScatterChart
} from 'recharts'

function BMIChart({ height, weight }) {
    const data = []
    for (let h = 100; h <= 210; h += 5) {
        const hM = h/100
        data.push(
            {
                height: h,
                underweight: (18.5 * hM ** 2).toFixed(2),
                normal: (25 * hM ** 2).toFixed(2),
                overweight: (30 * hM ** 2).toFixed(2)
            }
        )
    }

    return (
        <ResponsiveContainer width = "100%" height = {400}>
            <LineChart data = {data}>
                <XAxis dataKey="height" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="underweight" stroke="#8884d8" />
                <Line type="monotone" dataKey="normal" stroke="#82ca9d" />
                <Line type="monotone" dataKey="overweight" stroke="#ff7300" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default function OutputColumn({ weight, height }) {
    return (
        <div id = "output">
            Your BMI:<br />
            {(weight / ((height / 100) ** 2)).toFixed(1)}
            <br />
            <BMIChart weight = {weight} height = {height} />
        </div>
    )
}