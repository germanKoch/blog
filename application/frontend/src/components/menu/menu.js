import React from "react";
import {Link} from "react-router-dom";
import "./menu.css"

export default class Menu extends React.Component {

  state = {
    activeKey: 1
  }

  items = [
    {
      key: 1,
      category: "dev",
      label: "Разработка"
    },
    {
      key: 2,
      category: "invest",
      label: "Инвестирование"
    },
    {
      key: 3,
      category: "proj",
      label: "Проекты"
    }
  ]

  onItemClick = (item) => {
    const {onMenuSwitched} = this.props
    this.setState({
      activeKey: item.key
    })
    onMenuSwitched(item.category)
  }

  render() {
    const content = this.items.map(item => {
      let classList = "nav-item"
      const {activeKey} = this.state
      if (item.key === activeKey) {
        classList += " active"
      }
      return (
        <li className={classList} key={item.key}>
          <Link to="/articles" className="nav-link menu-item" onClick={() => {
            this.onItemClick(item)
          }}>{item.label}</Link>
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