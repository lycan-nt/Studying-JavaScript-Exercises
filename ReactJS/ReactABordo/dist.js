const contextName = React.createContext("name");

function myComponent1() {
  const name = "Felipe";
  return /*#__PURE__*/React.createElement(contextName.Provider, {
    value: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement("myComponent2", null)));
}

function myComponent2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("myComponent3", null));
}

function myComponent3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement("myComponent4", null));
}

function myComponent4() {
  return /*#__PURE__*/React.createElement(contextName.Consumer, null, contextName => {
    /*#__PURE__*/
    React.createElement("div", {
      className: "component-4"
    }, /*#__PURE__*/React.createElement("p", null, contextName));
  });
}

function myComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement("myComponent1", null));
}

ReactDOM.render( /*#__PURE__*/React.createElement("myComponent", null), document.getElementById("app"));
