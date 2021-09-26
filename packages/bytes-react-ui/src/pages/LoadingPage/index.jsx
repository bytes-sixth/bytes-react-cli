import logo from './logo.svg'
import './index.css'
const LoadingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          loading
          <span className="loading-text" />
        </p>
      </header>
    </div>
  )
}

export default LoadingPage
