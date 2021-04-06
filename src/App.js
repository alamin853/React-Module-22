import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const friends = [
    {name: "Solman", id: "1", phone: "01686070740"},
    {name: "Tanvir", id: "2", phone: "01886326250"},
    {name: "Endika", id: "3", phone: "01595825545"},
    {name: "Sahadat", id: "4", phone: "01595645451"},
    {name: "Sabbir", id: "5", phone: "3252565454"},
  ]
  const products = [
    {name: "Photoshop", price: "$90.99"},
    {name: "Illustrator", price: "$60.99"},
    {name: "PDF Reader", price: "$6.99"},
    {name: "Premiere El", price: "$249.99"},
  ]

  const shoppings =[
    {name: "Shirt", price: "$50"},
    {name: "Pant", price: "$100"},
    {name: "Panjabi", price: "$150"},
    {name: "Show", price: "$300"},
    {name: "T-shirt", price: "$200"},
    {name: "Sungluss", price: "$80"},

  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}

        {/* <Student name={friends[0]} id="1" phone="01726545454"></Student>
        <Student name={friends[1]} id="2" phone="01906993543"></Student>
        <Student name={friends[2]} id="3" phone="01855662554"></Student> */}
        
        <Posts></Posts>

        <Users></Users>
        
        <Counter></Counter>
        
        {
          shoppings.map(shop => <Shopping shopping={shop}></Shopping>)
        }
        
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <ul>
          {
            friends.map(st => <Student student={st}></Student>)
          }
        </ul>

      </header>
    </div>
  );
}

function Posts(){
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Posts: {posts.length}</h3>
      <ul>
        {
          posts.map(post => <h4>{post.title}</h4>)
        }
      </ul>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Shopping(props){
  const shopStyle={
    border: "1px solid gray",
    margin: "2px",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "lightblue",
    width: "300px"
  }
  return (
    <div style={shopStyle}>
      <h3>Name: {props.shopping.name}</h3>
      <h5>Price: {props.shopping.price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '2px solid gray',
    borderRadius: "5px",
    backgroundColor: "lightgray",
    width: "200px",
    height: "200px",
    float: "left",
    color: "red",
    marginBottom: "5px"
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Student(props){
  const studentStyle={
    border: '2px solid red',
    margin: '10px',
    padding: '5px 10px',
    color: 'gold',
    width: "90%",
  }
  console.log(props)
  return (
  <div style={studentStyle}>
    <h2>Name: {props.student.name}</h2>
    <h3 style={{color: 'lightblue'}}>ID: {props.student.id}</h3>
    <p style={{color: "white"}}>Number: {props.student.phone}</p>
  </div>
  )
}





export default App;
