export default function OutputColumn({ weight, height }) {
    return (
        <div>
            { `BMI: ${weight / ((height / 100) ** 2)}` }
        </div>
    )
}