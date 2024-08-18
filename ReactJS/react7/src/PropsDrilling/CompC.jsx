import CompD from './CompD'

const CompC = (props) => {
  return (
    <div>
        <h1>CompC</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompD ename={props.name}/>
    </div>
  )
}

export default CompC