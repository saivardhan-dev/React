// import ListGroup from "./components/ListGroup";
// function App(){
//   let items=[
//     'New York',
//     'San Fransisco',
//     'Tokyo',
//     'London',
//     'Paris'
// ];
// const handleSelectItem=(item:string)=>{
//   console.log(item)
// }
//   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
// }

import Button from "./components/Button";

import Alert from "./components/Alert";
import { useState } from "react";

// function App(){
//   return(
//     <div>
// <Alert>Hello<span>World</span></Alert>
//     </div>
//   );
// }
// export default App;
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
