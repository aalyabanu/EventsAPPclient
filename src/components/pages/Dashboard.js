import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      id: 0,
      title: "",
      location: "",
      date: "",
      time: "",
      description: "",
    };
  }

  componentDidMount() {
    axios.get("https://events-app.herokuapp.com/events/").then((res) => {
      this.setState({
        events: res.data,
        id: 0,
        title: "",
        location: "",
        date: "",
        time: "",
        description: "",
      });
    });
  }
  titleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  locationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  dateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  timeChange = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  descriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  submit(event, id) {
    event.preventDefault();
    if (id === 0) {
      axios
        .post("https://events-app.herokuapp.com/events/", {
          title: this.state.title,
          location: this.state.location,
          date: this.state.date,
          time: this.state.time,
          description: this.state.description,
        })
        .then(() => {
          this.componentDidMount();
        });
    } else {
      axios
        .put(`https://events-app.herokuapp.com/events/${id}`, {
          title: this.state.title,
          location: this.state.location,
          date: this.state.date,
          time: this.state.time,
          description: this.state.description,
        })
        .then(() => {
          this.componentDidMount();
        });
    }
  }

  edit(id) {
    axios.get(`https://events-app.herokuapp.com/events/${id}`).then((res) => {
      console.log(res.data);
      this.setState({
        id: res.data._id,
        title: res.data.title,
        location: res.data.location,
        date: res.data.date,
        time: res.data.time,
        description: res.data.description,
      });
    });
  }

  delete(id) {
    axios.delete(`https://events-app.herokuapp.com/events/${id}`).then(() => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <div className="row mt-4">
        <br />
        <div className="col s4">
          <form
            className="form"
            onSubmit={(e) => this.submit(e, this.state.id)}
          >
            <div className="input-field col s12">
              <label htmlFor="autocomplete-input">Title</label>
              <input
                value={this.state.title}
                onChange={(e) => this.titleChange(e)}
                type="text"
              />
            </div>
            <div className="input-field col s12">
              <label htmlFor="autocomplete-input">Location</label>
              <input
                value={this.state.location}
                onChange={(e) => this.locationChange(e)}
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
            </div>
            <div className="input-field col s12">
              <label htmlFor="autocomplete-input">Date</label>
              <input
                value={this.state.date}
                onChange={(e) => this.dateChange(e)}
                type="date"
                className="datepicker"
              />
            </div>
            <div className="input-field col s12">
              <label htmlFor="autocomplete-input">Time</label>
              <input
                value={this.state.time}
                onChange={(e) => this.timeChange(e)}
                type="time"
                className="autocomplete"
              />
            </div>
            <div className="input-field col s12">
              <label htmlFor="autocomplete-input">Description</label>
              <input
                value={this.state.description}
                onChange={(e) => this.descriptionChange(e)}
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
            </div>
            <button className="submit-button" type="submit" name="action">
              Submit
            </button>
            <br />
            <br />
            <br />
          </form>
        </div>

        <div className="col s8">
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {this.state.events.map((event) => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{event.location}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.description}</td>
                  <td>
                    <Button
                      onClick={(e) => this.edit(event._id)}
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      <i className="material-icons">edit</i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={(e) => this.delete(event._id)}
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      <i className="material-icons">delete</i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Dashboard;
