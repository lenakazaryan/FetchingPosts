import "./App.css";
import PostsItemsList from "./posts/postItemsList";
import onLoad from "./main";
function App() {
  onLoad().then((value) => {
    console.log(value);
  });

  return (
    <div className="App">
      <h1 className="text">Please, Click on the post :)</h1>
      <PostsItemsList />
    </div>
  );
}

export default App;
