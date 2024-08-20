import react from 'react'
import Product from './components/Product'

class App extends react.Component{
    render(){
        return <div>
            <h1>App component</h1>
            <Product/>
        </div>
    }
}
export default App