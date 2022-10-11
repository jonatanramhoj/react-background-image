import BackgroundImage from 'react-background-image';
import placeholder from './images/small.jpg';
import hdImage from './images/large.jpg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <BackgroundImage
        placeholder={placeholder}
        src={hdImage}
        className='my-test-class'
      >
        <h2 className='heading'>いくつかのクールな見出し</h2>
      </BackgroundImage>
    </div>
  );
}

export default App;
