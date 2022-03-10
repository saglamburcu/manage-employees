import EmployeeList from "./componets/EmployeeList";
import EmployeeContextProvider from "./context/EmployeeContext";

const App = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>

  )
}

export default App;