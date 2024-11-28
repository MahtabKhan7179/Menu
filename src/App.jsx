import { useState, useEffect } from "react";
import Title from "./components/Title";
import foodMenu from "./data"
import Menu from "./components/Menu";
import Category from "./components/Category";
const categories = ['all', ...new Set(foodMenu.map((item) => item.category))]

//same fuctions with alternate code

// const mySet = new Set();
//   mySet.add("all");
//   foodMenu.map((item) => { mySet.add(item.category) })
//   let array = Array.from(mySet);

const App = () => {
  const [menu, setMenu] = useState(foodMenu);
  const [category, setCategory] = useState();

  // useEffect(() => {
  //   setMenu(
  //     foodMenu.filter(foodItem => {
  //       return (
  //         (!category || (category === "all" ? category !== foodItem.category : category === foodItem.category))
  //       )
  //     })
  //   )
  // }, [category])

  // const filterMenu = (e) => {
  //   setCategory(e.target.value)
  // }

  //same applications with alternate fuctions code

  const filterMenu = (e) => {
    if (e.target.value === 'all') {
      setMenu(foodMenu);
      return;
    }
    const value = e.target.value;
    setMenu(foodMenu.filter((item) => item.category === value))
  }


  return <main className="menu">
    <Title category={category} />
    <Category categories={categories} filterMenu={filterMenu} />
    <Menu menu={menu} />
  </main>;
};
export default App;
