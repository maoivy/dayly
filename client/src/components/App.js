import React, { Component } from "react";
import { navigate, Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Daily from "./pages/Daily.js";
import Monthly from "./pages/Monthly.js";
import Yearly from "./pages/Yearly.js";
import Collections from "./pages/Collections.js";
import Landing from "./pages/Landing.js";
import Loading from "./pages/Loading.js";
import Settings from "./pages/Settings.js";
import Navbar from "./modules/Navbar.js";
import Tab from "./modules/Tab.js";

import "./App.css";
import "../utilities.css";

// import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBold,
  faItalic,
  faUnderline,
  faListUl,
  faListOl,
  faAngleLeft,
  faAngleRight,
  faCheck,
  faTimes,
  faCaretDown,
  faCircle as fasFaCircle,
  faMinus,
  faStrikethrough,
  faHighlighter,
  faFont,
  faSadCry,
  faLaughBeam,
  faGrinHearts,
  faFrown,
  faMeh,
  faCog,
  faTrashAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farFaCircle } from "@fortawesome/free-regular-svg-icons";
library.add(
  faBold,
  faItalic,
  faUnderline,
  faListUl,
  faListOl,
  faAngleLeft,
  faAngleRight,
  faCheck,
  faTimes,
  faCaretDown,
  fasFaCircle,
  farFaCircle,
  faMinus,
  faStrikethrough,
  faHighlighter,
  faFont,
  faSadCry,
  faLaughBeam,
  faGrinHearts,
  faFrown,
  faMeh,
  faCog,
  faTrashAlt,
  faPlus
);

const moment = require("moment");

const defaultTheme = {
  "--background": "#f5f5f5",
  "--bujo-body": "#ffffff",
  "--borders": "#cec0b7",
  "--accent": "#e78d8d",
  "--headers": "#3d3d3d",
  "--hover": "#f7ebeb",
  "--tab0": "#ff6c6c",
  "--tab1": "#6cb9ff",
  "--tab2": "#ffbc6c",
  "--tab3": "#ad6cff",
  "--label1": "#cf9893",
  "--label2": "#b3d9ff",
  "--label3": "#d9b3ff",
  "--body": "#6e6e6e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#c0c0c0",
  "--calendar-text-year": "#696969",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(152, 180, 241, 0.08)",
  "--slider-2": "rgba(152, 180, 241, 0.17)",
  "--slider-3": "rgba(152, 180, 241, 0.25)",
  "--slider-4": "rgba(152, 180, 241, 0.34)",
  "--slider-5": "rgba(152, 180, 241, 0.42)",
  "--slider-6": "rgba(152, 180, 241, 0.5)",
  "--slider-7": "rgba(152, 180, 241, 0.58)",
  "--slider-8": "rgba(152, 180, 241, 0.67)",
  "--slider-9": "rgba(152, 180, 241, 0.75)",
  "--slider-10": "rgba(152, 180, 241, 0.83)",
  "--slider-11": "rgba(152, 180, 241, 0.92)",
  "--slider-12": "rgba(152, 180, 241, 1)",
};

const lilacTheme = {
  "--background": "#e7ddf8",
  "--bujo-body": "#f5f5f5",
  "--borders": "#c2a4db",
  "--accent": "#393952",
  "--headers": "#655296",
  "--hover": "#e9e1f8",
  "--tab0": "#9aabf2",
  "--tab1": "#e3b3ea",
  "--tab2": "#c099e6",
  "--tab3": "#9f98e4",
  "--label1": "#6cbeff",
  "--label2": "#6c88ff",
  "--label3": "#796bff",
  "--body": "#4c4c4c",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#a2a2a2",
  "--calendar-text-year": "#5c5c5c",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(178, 104, 202, 0.08)",
  "--slider-2": "rgba(188, 104, 202, 0.17)",
  "--slider-3": "rgba(188, 104, 202, 0.25)",
  "--slider-4": "rgba(188, 104, 202, 0.34)",
  "--slider-5": "rgba(188, 104, 202, 0.42)",
  "--slider-6": "rgba(188, 104, 202, 0.5)",
  "--slider-7": "rgba(188, 104, 202, 0.58)",
  "--slider-8": "rgba(188, 104, 202, 0.67)",
  "--slider-9": "rgba(188, 104, 202, 0.75)",
  "--slider-10": "rgba(188, 104, 202, 0.83)",
  "--slider-11": "rgba(188, 104, 202, 0.92)",
  "--slider-12": "rgba(188, 104, 202, 1)",
};

const naturalTheme = {
  "--background": "#f4eee1",
  "--bujo-body": "#ffffff",
  "--borders": "#e4d1c2",
  "--accent": "#efba89",
  "--headers": "#999999",
  "--hover": "#f1e3d6",
  "--tab0": "#695b5c",
  "--tab1": "#d3c4be",
  "--tab2": "#d39b84",
  "--tab3": "#8090a8",
  "--label1": "#A37974",
  "--label2": "#D1AFAB",
  "--label3": "#91A2AC",
  "--body": "#6e6e6e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#c0c0c0",
  "--calendar-text-year": "#696969",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(39, 95, 151, 0.08)",
  "--slider-2": "rgba(39, 95, 151, 0.17)",
  "--slider-3": "rgba(39, 95, 151, 0.25)",
  "--slider-4": "rgba(39, 95, 151, 0.34)",
  "--slider-5": "rgba(39, 95, 151, 0.42)",
  "--slider-6": "rgba(39, 95, 151, 0.5)",
  "--slider-7": "rgba(39, 95, 151, 0.58)",
  "--slider-8": "rgba(39, 95, 151, 0.67)",
  "--slider-9": "rgba(39, 95, 151, 0.75)",
  "--slider-10": "rgba(39, 95, 151, 0.83)",
  "--slider-11": "rgba(39, 95, 151,, 0.92)",
  "--slider-12": "rgba(39, 95, 151, 1)",
};

const ivyTheme = {
  "--background": "#DFEDDE",
  "--bujo-body": "#f5f5f5",
  "--borders": "#a8c198",
  "--accent": "#3c8942",
  "--headers": "#52853b",
  "--hover": "#b2d3ae",
  "--tab0": "#397923",
  "--tab1": "#b0e096",
  "--tab2": "#9cd566",
  "--tab3": "#72aa3d",
  "--label1": "#89bd83",
  "--label2": "#8dc51f",
  "--label3": "#318f45",
  "--body": "#6e6e6e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#929292",
  "--calendar-text-year": "#696969",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(135, 223, 111, 0.08)",
  "--slider-2": "rgba(135, 223, 111, 0.17)",
  "--slider-3": "rgba(135, 223, 111, 0.25)",
  "--slider-4": "rgba(135, 223, 111, 0.34)",
  "--slider-5": "rgba(135, 223, 111, 0.42)",
  "--slider-6": "rgba(135, 223, 111, 0.5)",
  "--slider-7": "rgba(135, 223, 111, 0.58)",
  "--slider-8": "rgba(135, 223, 111, 0.67)",
  "--slider-9": "rgba(135, 223, 111, 0.75)",
  "--slider-10": "rgba(135, 223, 111, 0.83)",
  "--slider-11": "rgba(135, 223, 111, 0.92)",
  "--slider-12": "rgba(135, 223, 111, 1)",
};

const galaxyTheme = {
  "--background": "#292933",
  "--bujo-body": "#454358",
  "--borders": "#fce2d2",
  "--accent": "#74c5dd",
  "--headers": "#7c8fe0",
  "--hover": "#7771b0",
  "--tab0": "#362e6a",
  "--tab1": "#8cb3d3",
  "--tab2": "#5985b9",
  "--tab3": "#2b3e6f",
  "--label1": "#9493cf",
  "--label2": "#5e8ebd",
  "--label3": "#deca6a",
  "--body": "#ffffff",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#c7c7c7",
  "--calendar-text-year": "#ded8d8",
  "--box-shadow": "rgba(255, 255, 255, 1)",

  "--slider-1": "rgba(247, 235, 129, 0.08)",
  "--slider-2": "rgba(247, 235, 129, 0.17)",
  "--slider-3": "rgba(247, 235, 129, 0.25)",
  "--slider-4": "rgba(247, 235, 129, 0.34)",
  "--slider-5": "rgba(247, 235, 129, 0.42)",
  "--slider-6": "rgba(247, 235, 129, 0.5)",
  "--slider-7": "rgba(247, 235, 129, 0.58)",
  "--slider-8": "rgba(247, 235, 129, 0.67)",
  "--slider-9": "rgba(247, 235, 129, 0.75)",
  "--slider-10": "rgba(247, 235, 129, 0.83)",
  "--slider-11": "rgba(247, 235, 129, 0.92)",
  "--slider-12": "rgba(247, 235, 129, 1)",
};

const redVelvetTheme = {
  "--background": "#e4dbce",
  "--bujo-body": "#faf6ef",
  "--borders": "#e6c9b7",
  "--accent": "#a63433",
  "--headers": "#9c1b11",
  "--hover": "#dfd5c6",
  "--tab0": "#8c1c13",
  "--tab1": "#a78a7f",
  "--tab2": "#735751",
  "--tab3": "#bf4342",
  "--label1": "#f07b7a",
  "--label2": "#96b8d9",
  "--label3": "#e2cc67",
  "--body": "#5e5e5e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#a0a0a0",
  "--calendar-text-year": "#565656",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(192, 51, 54, 0.08)",
  "--slider-2": "rgba(192, 51, 54, 0.17)",
  "--slider-3": "rgba(192, 51, 54, 0.25)",
  "--slider-4": "rgba(192, 51, 54, 0.34)",
  "--slider-5": "rgba(192, 51, 54, 0.42)",
  "--slider-6": "rgba(192, 51, 54, 0.5)",
  "--slider-7": "rgba(192, 51, 54, 0.58)",
  "--slider-8": "rgba(192, 51, 54, 0.67)",
  "--slider-9": "rgba(192, 51, 54, 0.75)",
  "--slider-10": "rgba(192, 51, 54, 0.83)",
  "--slider-11": "rgba(192, 51, 54, 0.92)",
  "--slider-12": "rgba(192, 51, 54, 1)",
};

const joyTheme = {
  "--background": "#f4e4bc",
  "--bujo-body": "#fffbef",
  "--borders": "#c7bfa4",
  "--accent": "#2458e0",
  "--headers": "#585244",
  "--hover": "#f4edd6",
  "--tab0": "#2558e0",
  "--tab1": "#f4d873",
  "--tab2": "#e44747",
  "--tab3": "#4ddff4",
  "--label1": "#de6f6f",
  "--label2": "#93aae8",
  "--label3": "#62c5d3",
  "--body": "#5e5e5e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#a0a0a0",
  "--calendar-text-year": "#565656",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(152, 180, 241, 0.08)",
  "--slider-2": "rgba(152, 180, 241, 0.17)",
  "--slider-3": "rgba(152, 180, 241, 0.25)",
  "--slider-4": "rgba(152, 180, 241, 0.34)",
  "--slider-5": "rgba(152, 180, 241, 0.42)",
  "--slider-6": "rgba(152, 180, 241, 0.5)",
  "--slider-7": "rgba(152, 180, 241, 0.58)",
  "--slider-8": "rgba(152, 180, 241, 0.67)",
  "--slider-9": "rgba(152, 180, 241, 0.75)",
  "--slider-10": "rgba(152, 180, 241, 0.83)",
  "--slider-11": "rgba(152, 180, 241, 0.92)",
  "--slider-12": "rgba(152, 180, 241, 1)",
};

const sakuraTheme = {
  "--background": "#f8dfe6",
  "--bujo-body": "#faeef2",
  "--borders": "#cec0b7",
  "--accent": "#af1a3f",
  "--headers": "#d17b88",
  "--hover": "#f4e1e7",
  "--tab0": "#f4c8de",
  "--tab1": "#af1b3f",
  "--tab2": "#ed9390",
  "--tab3": "#ffbbbe",
  "--label1": "#ed9390",
  "--label2": "#ffbbbd",
  "--label3": "#f4c8de",
  "--body": "#6e6e6e",
  "--accent-text": "#ffffff",
  "--calendar-text-month": "#c0c0c0",
  "--calendar-text-year": "#696969",
  "--box-shadow": "rgba(51, 50, 47, 0.377)",

  "--slider-1": "rgba(255, 153, 212, 0.08)",
  "--slider-2": "rgba(255, 153, 212, 0.17)",
  "--slider-3": "rgba(255, 153, 212, 0.25)",
  "--slider-4": "rgba(255, 153, 212, 0.34)",
  "--slider-5": "rgba(255, 153, 212, 0.42)",
  "--slider-6": "rgba(255, 153, 212, 0.5)",
  "--slider-7": "rgba(255, 153, 212, 0.58)",
  "--slider-8": "rgba(255, 153, 212, 0.67)",
  "--slider-9": "rgba(255, 153, 212, 0.75)",
  "--slider-10": "rgba(255, 153, 212, 0.83)",
  "--slider-11": "rgba(255, 153, 212, 0.92)",
  "--slider-12": "rgba(255, 153, 212, 1)",
};

const themeMap = {
  default: defaultTheme,
  ivy: ivyTheme,
  lilac: lilacTheme,
  natural: naturalTheme,
  galaxy: galaxyTheme,
  redVelvet: redVelvetTheme,
  joy: joyTheme,
  sakura: sakuraTheme,
};

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      creator: undefined,
      creatorName: undefined,
      dateObject: moment().local(),
      data: null,
      widgetlist: null,
      currentView: "",
      activeTheme: null,
    };
  }

  async componentDidMount() {
    const user = await get("/api/whoami");
    // they are registered in the database, and currently logged in.
    if (user._id) {
      this.setState({
        creator: user._id,
        creatorName: user.name,
        activeTheme: user.theme,
      });

      const userWidgets = user.widgetList;
      this.setState({
        widgetlist: userWidgets,
      });

      this.getDateData(this.state.dateObject);

      this.setState({
        currentView: window.location.pathname.slice(1),
      });
    }
  }

  handleLogin = (res) => {
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken })
      .then((user) => {
        this.setState({
          creator: user._id,
          widgetlist: user.widgetList,
          creatorName: user.name,
          activeTheme: user.theme,
        });
        // return post("/api/initsocket", { socketid: socket.id });
      })
      .then(() => {
        navigate("/day");
      })
      .then(() => {
        this.getDateData(this.state.dateObject);
      });

    this.setState({
      currentView: window.location.pathname.slice(1),
    });
  };

  handleLogout = () => {
    this.setState({
      creator: undefined,
    });
    post("/api/logout").then(() => {
      navigate("/");
      this.setTheme("default");
    });
  };

  handleBackClick = async (varToChange) => {
    // update date state
    if (varToChange === "day") {
      this.setState({
        dateObject: this.state.dateObject.subtract(1, "day"),
      });
      this.getDateData(this.state.dateObject);
    } else if (varToChange === "month") {
      this.setState({
        dateObject: this.state.dateObject.subtract(1, "month"),
      });
    } else {
      this.setState({
        dateObject: this.state.dateObject.subtract(1, "year"),
      });
    }
  };

  handleNextClick = async (varToChange) => {
    // if changing daily view update date state
    if (varToChange === "day") {
      this.setState({
        dateObject: this.state.dateObject.add(1, "day"),
      });
      this.getDateData(this.state.dateObject);
    } else if (varToChange === "month") {
      this.setState({
        dateObject: this.state.dateObject.add(1, "month"),
      });
    } else {
      this.setState({
        dateObject: this.state.dateObject.add(1, "year"),
      });
    }
  };

  handleWidgetSubmit = (name, type) => {
    const params = { name: name, widgetType: type };
    post("/api/user/widgets", params).then((newWidgets) => {
      this.setState({
        widgetlist: newWidgets,
      });
    });
  };

  handleWidgetDelete = (id, name) => {
    post("/api/user/widgets/delete", { widget: id, name: name }).then((userNew) => {
      this.setState({ widgetlist: userNew.widgetList });
    });
  };

  setTheme = (themeName) => {
    const theme = themeMap[themeName];
    Object.keys(theme).map((color) => {
      const value = theme[color];
      document.documentElement.style.setProperty(color, value);
    });
  };

  handleThemeChange = (themeName) => {
    post("/api/user/theme", { theme: themeName }).then((updatedUser) => {
      this.setState({ activeTheme: updatedUser.theme });
    });
  };

  /**
   *  Methods for overriding current day
   *  */
  getDateData = async (date) => {
    // update data state
    const params = {
      day: date.format(),
    };
    const newData = await post("/api/day", params);
    this.setState({
      data: newData,
    });
  };

  setToOldDate = (date) => {
    this.setState({
      dateObject: date,
    });
    this.getDateData(date);
  };

  viewToday = () => {
    this.setState({
      dateObject: moment().local(),
    });
  };

  resetCurrentView = () => {
    if (this.state.currentView.length != "") {
      this.setState({
        currentView: "",
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentView !== window.location.pathname.slice(1)) {
      this.setState({
        currentView: window.location.pathname.slice(1),
      });
    }
    if (
      window.location.pathname.slice(1) === "day" &&
      prevState.dateObject !== this.state.dateObject
    ) {
      this.getDateData(this.state.dateObject);
    }
  }

  render() {
    if (this.state.creator) {
      if (this.state.activeTheme) {
        this.setTheme(this.state.activeTheme);
      }
      return (
        <>
          <Navbar
            creator={this.state.creator}
            creatorName={this.state.creatorName}
            currentView={this.state.currentView}
            handleViewChange={this.resetCurrentView}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />

          <div className="bullet-journal">
            <div className="bullet-journal_body">
              <Router>
                {this.state.data ? (
                  <Daily
                    path="/day"
                    dateObject={this.state.dateObject}
                    data={this.state.data}
                    handleBackClick={() => this.handleBackClick("day")}
                    handleNextClick={() => this.handleNextClick("day")}
                  />
                ) : (
                  <Loading path="/day" />
                )}
                {/* View for when you look back on Monthly view */}
                <Daily
                  path="/day/:oldYear/:oldMonth/:oldDay"
                  dateObject={this.state.dateObject}
                  data={this.state.data}
                  setToOldDate={this.setToOldDate}
                  handleBackClick={() => this.handleBackClick("day")}
                  handleNextClick={() => this.handleNextClick("day")}
                />
                <Monthly
                  path="/month"
                  dateObject={this.state.dateObject}
                  widgetlist={this.state.widgetlist}
                  handleBackClick={() => this.handleBackClick("month")}
                  handleNextClick={() => this.handleNextClick("month")}
                />
                <Yearly
                  path="/year"
                  dateObject={this.state.dateObject}
                  widgetlist={this.state.widgetlist}
                  handleBackClick={() => this.handleBackClick("year")}
                  handleNextClick={() => this.handleNextClick("year")}
                />
                <Collections path="/collections" />
                <Settings
                  path="/settings"
                  creator={this.state.creator}
                  widgetlist={this.state.widgetlist}
                  handleWidgetSubmit={this.handleWidgetSubmit}
                  handleWidgetDelete={this.handleWidgetDelete}
                  themeMap={themeMap}
                  activeTheme={this.state.activeTheme}
                  handleThemeChange={this.handleThemeChange}
                />
                <Daily
                  path="/"
                  dateObject={this.state.dateObject}
                  data={this.state.data}
                  setToOldDate={this.setToOldDate}
                  handleBackClick={() => this.handleBackClick("day")}
                  handleNextClick={() => this.handleNextClick("day")}
                />
                <Loading default />
              </Router>
            </div>
            <Tab
              creator={this.state.creator}
              currentView={this.state.currentView}
              handleViewChange={this.viewToday}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar
            //creator={this.state.creator}
            currentView={this.state.currentView}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            handleViewChange={this.viewToday}
          />
          <Router>
            <Landing path="/" />
            <Loading default />
            <NotFound path="/404" />
          </Router>
        </>
      );
    }
  }
}

export default App;
