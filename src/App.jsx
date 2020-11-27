import React, { useState } from 'react';
import TabControls from './components/TabControls/TabControls';
import TabList from './components/TabLIst/TabList';
export default function App() {
  const [Tab1, SetTab1] = useState(true);
  const [Tab2, SetTab2] = useState(false);
  const [Tab3, SetTab3] = useState(false);

  const handlerButton = id => {
    SetTab1(false);
    SetTab2(false);
    SetTab3(false);
    switch (id) {
      case 'Tab1':
        SetTab1(true);
        break;
      case 'Tab2':
        SetTab2(true);
        break;
      case 'Tab3':
        SetTab3(true);
        break;
      default:
        console.log('error:no id!');
    }
  };

  return (
    <div>
      <TabControls onHandlerButton={handlerButton} />
      <TabList Tab1={Tab1} Tab2={Tab2} Tab3={Tab3} />
    </div>
  );
}

// use class component
// export default class App extends Component {

//   state = {
//     Tab1: true,
//     Tab2: false,
//     Tab3: false,
//   };

//   handlerButton = id => {
//     this.setState({
//       Tab1: false,
//       Tab2: false,
//       Tab3: false,
//     });

//     this.setState({
//       [id]: true,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <TabControls onHandlerButton={this.handlerButton} />
//         <ul className="tabList">
//           {this.state.Tab1 && <li className="Tab">activeTab1</li>}
//           {this.state.Tab2 && <li className="Tab">activeTab2</li>}
//           {this.state.Tab3 && <li className="Tab">activeTab3</li>}
//         </ul>
//       </div>
//     );
//   }
// }
