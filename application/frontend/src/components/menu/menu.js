import React from "react";
import {Link} from "react-router-dom";
import "./menu.css"
import CategoryService from "../../service/category";

export default class Menu extends React.Component {

  categoryService = new CategoryService()

  state = {
    activeKey: 0,
    items: []
  }


  onItemClick = (item) => {
    const {onMenuSwitched} = this.props
    this.setState({
      activeKey: item.id
    })
    onMenuSwitched(item.id)
  }

  componentDidMount() {
    this.categoryService.getListItems().then((items) => {
        this.setState({
          items
        });
      }
    )
  }


  render() {
    console.log(this.items)
    const content = this.state.items.map(item => {
      let classList = "nav-item"
      const {activeKey} = this.state
      if (item.id === activeKey) {
        classList += " active"
      }
      return (
        <li className={classList} key={item.id}>
          <Link to="/articles" className="nav-link menu-item" onClick={() => {
            this.onItemClick(item)
          }}>{item.title}</Link>
        </li>
      )
    })

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {content}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}