import './app.css';
import AppInfo from '../app-info/app-info';
import AddClock from '../add-clock/add-clock';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <AddClock/>
        </div>
    );
}
export default App;