import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer"
import friends from "./friends.json"

// function shuffleArray(arr) {
//   var i,j,temp;
//   for (i = arr.length - 1; i > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }
//   return arr;    
// }

// var tempFriend = shuffleArray(friends);
// const imageArr = ["./assets/img1.png", "./assets/img2.png","./assets/img3.png","./assets/img4.png","./assets/img5.png","./assets/img6.png","./assets/img7.png","./assets/img8.png","./assets/img9.png","./assets/img10.png","./assets/img11.png","./assets/img12.png"];

class App extends React.Component {
  
  // tempFriend = shuffleArray(friends);

  render(){
  return (
    <div className="container">
      <Navbar />
      <Header />
      {friends.map(friend => {
        return (
          <Card 
          name={friend.name}
          id={friend.id}
          image={process.env.PUBLIC_URL+friend.image}
          description={friend.description}
          techUsed={friend.techUsed}
          link={friend.link}
          key={friend.id}/>
        )})}
      <Footer />
      <hr></hr>
      <div>Other Project links can be found at Github link displayed in footer....</div>
    </div>
  );
  }
}

export default App;
