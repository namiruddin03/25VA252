import './App.css'
import StudentRegistration from './component/studentRegistration'
import UseState from './component/usestate'
import Demo from './component/Demo'
import Props from './component/Props'
import Exp7 from './component/Exp7'



function App() {
  const name="ABES College"

  const students=[
    {name:"Pratham" , rollno:"45" , course:"B.Tech"},
     {name:"Ranjan" , rollno:"51" , course:"B.Tech"},
      {name:"Priyanshu" , rollno:"49" , course:"B.Tech"}
  ]

  return (
    <>
     <h1>Welcome To React</h1>
     <h2>hello {name}</h2>
     <Props name="Parth" rollno="2503215400118" course="B.tech"/>
     <Exp7 students={students}/>
     <UseState/>
    <StudentRegistration/>
    </>
  )
}

export default App