import Navbar from "./component/navbar";
import Habits from "./component/habits";
import { useState } from "react";
import Addform from "./component/addform";


function App() {
  
  const [habits, setHabit] = useState([
  {id: 1,name: 'Reading', count: 0},
  {id: 2,name: 'Running', count: 0},
  {id: 3,name: 'Coding', count: 0}
]);

const onAdd = name =>{
    
    setHabit([...habits,{id: Date.now(), name, count: 0}]);

}
const onincrease = (habit)=>{

  
  const habitss =habits.map(item => {
    if (item.id === habit.id) {
      const count = habit.count +1;
      return { ...habit, count: count < 0 ? 0 : count };
    }
    return item;
  });
  

  

  setHabit(habitss)
}
const ondecrease = (habit) =>{
   
  const habitss =habits.map(item => {
    if (item.id === habit.id) {
      const count = habit.count -1;
      return { ...habit, count: count < 0 ? 0 : count };
    }
    return item;
  });
  setHabit(habitss)
}


const onDelete = habit =>{
  
 
  setHabit(habits.filter(item => item.id !== habit.id ));
}

const onReset= () =>{
  
 const habitss = habits.map(habit =>{
   if(habit.count !==0){
     return {...habit, count: 0}
   }
   return habit
 })
 setHabit(habitss)
}



  return (
    <div className="App">
     <Navbar></Navbar>
     <Addform onAdd={onAdd}></Addform>
     <Habits  habits={habits} onincrease={onincrease} ondecrease={ondecrease}  onDelete={onDelete} onReset={onReset}  ></Habits>
       
    </div>
  );
}

export default App;
