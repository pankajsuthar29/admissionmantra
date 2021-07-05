import React, { useState, useContext } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import Select from "react-select";
import { ThemeContext } from "../../context/ThemeContext";

const Setting = () => {
  const [settingToggle, setSettingToggle] = useState(false);
  const {
    body,
    sideBarOption,
    layoutOption,
    backgroundOption,
    sidebarposition,
    headerPositions,
    containerPosition,
    directionPosition,
    fontFamily,
    changeNavigationHader,
    sideBarStyle,
    changeSideBarStyle,
    changeSideBarPostion,
    sidebarpositions,
    changeHeaderPostion,
    headerposition,
    changeSideBarLayout,
    sidebarLayout,
    changeDirectionLayout,
    direction,
    colors,
    chnageHaderColor,
    chnageSidebarColor,
    changeBackground,
	changeContainerPosition,
	containerPosition_,
    background,
  } = useContext(ThemeContext);
  return (
    <div className={`sidebar-right ${settingToggle ? "show" : ""}`}>
      <Link
        to="#"
        className="sidebar-right-trigger wave-effect wave-effect-x"
        onClick={() => setSettingToggle(!settingToggle)}
      >
        <span>
          <i className="fa fa-cog fa-spin" />
        </span>
      </Link>
      <PerfectScrollbar className="sidebar-right-inner ps ps--active-y">
        <div className="tab-content tab-content-default tabcontent-border">
          <div className="tab-pane fade active show" id="home8" role="tabpanel">
            <div className="admin-settings">
              <h4>Pick your style</h4>
              <div>
                <p>Background</p>{" "}
                <Select
                  defaultValue={background}
                  onChange={(e) => changeBackground(e)}
                  options={backgroundOption}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Layout</p>{" "}
                <Select
                  defaultValue={sidebarLayout}
                  onChange={(e) => changeSideBarLayout(e)}
                  options={layoutOption}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Sidebar</p>{" "}
                <Select
                  defaultValue={sideBarStyle}
                  onChange={(e) => changeSideBarStyle(e)}
                  options={sideBarOption}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Sidebar position</p>{" "}
                <Select
                  defaultValue={sidebarposition}
                  onChange={(e) => changeSideBarPostion(e)}
                  options={sidebarpositions}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Header position</p>{" "}
                <Select
                  defaultValue={headerposition}
                  onChange={(e) => changeHeaderPostion(e)}
                  options={headerPositions}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Container</p>{" "}
                <Select defaultValue={containerPosition_} onChange={(e) => changeContainerPosition(e)} options={containerPosition}
					style={{ lineHeight: "40px",color: "#7e7e7e",paddingLeft: " 15px",}}
				/>
              </div>
              <div>
                <p>Direction</p>{" "}
                <Select
                  defaultValue={direction}
                  onChange={(e) => changeDirectionLayout(e)}
                  options={directionPosition}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Body Font</p>{" "}
                <Select
                  defaultValue={fontFamily[1]}
                  onChange={(e) =>
                    body.setAttribute("data-typography", e.value)
                  }
                  options={fontFamily}
                  style={{
                    lineHeight: "40px",
                    color: "#7e7e7e",
                    paddingLeft: " 15px",
                  }}
                />
              </div>
              <div>
                <p>Navigation Header</p>
                <div>
                  {colors.map((color, i) => (
                    <span key={i}>
                      <input
                        type="radio"
                        name="navigation_header"
                        defaultValue={color}
                        className="filled-in chk-col-primary"
                        id={`nav_header_${color}`}
                        onClick={() => changeNavigationHader(color)}
                      />
                      <label htmlFor={`nav_header_${color}`} />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p>Header</p>
                <div>
                  {colors.map((color, i) => (
                    <span key={i}>
                      <input
                        type="radio"
                        name="header_bg"
                        defaultValue={color}
                        className="filled-in chk-col-primary"
                        id={`header_${color}`}
                        onClick={() => chnageHaderColor(color)}
                      />
                      <label htmlFor={`header_${color}`} />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p>Sidebar</p>
                <div>
                  {colors.map((color, i) => (
                    <span key={i}>
                      <input
                        type="radio"
                        name="navigation_header"
                        defaultValue={color}
                        className="filled-in chk-col-primary"
                        id={`sidebar_${color}`}
                        onClick={() => chnageSidebarColor(color)}
                      />
                      <label htmlFor={`sidebar_${color}`} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Setting;
