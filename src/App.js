import Userdetails from "./userdetails";
import "./App.css";
const users = [
  {
    id: 1,
    name: "Ganesh",
    age: 16,
    img: "https://tse2.mm.bing.net/th/id/OIP.L1tOpfWSRi5Ur_RP98eJowHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Ramesh",
    age: 17,
    img: "https://th.bing.com/th/id/OIP.0J2kX4bYHkX4bYHkX4bYHkAAAA?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    name: "Suresh",
    age: 18,
    img: "https://th.bing.com/th/id/OIP.0J2kX4bYHkX4bYHkX4bYHkAAAA?pid=ImgDet&rs=1",
  },
];

function App() {
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      {users.length === 0 && <p>No users found.</p>}
      {users.map((user) => (
        <Userdetails key={user.id} fname={user.name} age={user.age} img={user.img} />
      ))}
    </div>
  );
}

export default App;



