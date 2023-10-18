import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    this.setState({ count: 1 });
    console.log("Component Did Mount");
  };
  // Mendupdate Dan Menampilkan Kondisi
  componentDidUpdate = () => {
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
    console.log("Component Did Update");
  };
  render() {
    return (
      <div className="d-flex align-items-center py-3">
        <span className=" mx-3  text-danger">{this.state.count}</span>
        <button
          className=" px-3 bg-primary text-white border-radius fw-bold"
          type="button"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        {console.log("Render")}
      </div>
    );
  }
}

export default Counter;
