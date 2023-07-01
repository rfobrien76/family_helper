import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <h1>Welcome to Family Helper Amplify</h1>
    </div>
  );
}

export default App;
