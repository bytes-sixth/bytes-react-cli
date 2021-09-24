import { useState } from 'react'

function App() {
  const [installDep, setInstallDep] = useState(0)
  const handleChange = () => {
    setInstallDep(select => !select)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div
      style={{
        margin: '200px auto 0',
        width: 200,
        boxShadow: 'hsl(200deg 18% 46% / 20%) 0px 0px 10px 2px',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          style={{
            marginBottom: 20,
          }}
        >
          是否安装依赖:
          <input
            name="installDep"
            type="checkbox"
            checked={installDep}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>确认</button>
      </form>
    </div>
  )
}

export default App
