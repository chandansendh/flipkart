import Header from "./Header";
import { Data } from "./Data";
import Card from "./Card";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {



  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {Data.map((item) => (
                  <Card
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    actualPrice={item.actualPrice}
                    offerPrice={item.offerPrice}
                  />
                ))}
              </div>
            </>
          }
        />
        <Route path="/cart" element={<Navbar text={"This is Cart Page"} />} />
        <Route
          path="/orders"
          element={<Navbar text={"This is Orders Page"} />}
        />
      </Routes>
    </>
  );
}

export default App;
