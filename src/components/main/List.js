function List({ input, main }) {
    const filteredData = main.props.children.filter((el) => {
      if (input === "") {
        return el;
      } else {
          console.log(main.props.children)
        return el.props.children[1].props.children[0].props.children
          .toLowerCase()
          .includes(input);
      }
    });
    if (filteredData.length === 0) {
      return <h3 className="cardmain">Recipe not found!!</h3>;
    } else {
      return <div className="cardmain">{filteredData}</div>;
    }
  }
  
  export default List;
  