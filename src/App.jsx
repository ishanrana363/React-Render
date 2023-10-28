// import data from "./data.json"
// import Card from './component/Card';
// let items = []
// const App = () => {
//   for(let i = 0;i<data.length;i++){
//       items.push( <Card cardTitle = {data[i].title} cardDesc = {data[i].description }  /> )
//   }
//   return (
//     <div>
//       {
//         items
//       }
//     </div>
//   );
// };

// export default App;
import UniqueList from './component/UniqueListId';

const App = () => {
  return (
    <div>
      <UniqueList/>
    </div>
  );
};

export default App;