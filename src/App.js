import "./App.css";
import { useGetAllPostQuery } from "./services/post";

function App() {
  const responseInfo = useGetAllPostQuery();
  console.log("Response", responseInfo);
  console.log("Data", responseInfo.data);
  return (
    <>
      <h2>Redux-Toolkit</h2>
      {responseInfo.data.map((post) => {
        return <div>{post.title}</div>;
      })}
    </>
  );
}

export default App;
