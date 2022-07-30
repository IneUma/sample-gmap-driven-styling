import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './components/Map';

function App() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? '';
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map center={{ lat: 34.693725, lng: 135.502254 }} zoom={8} />
    </Wrapper>
  );
}

export default App;
