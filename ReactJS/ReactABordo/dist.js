const ContextName = React.createContext("name");

function MyComponent1() {
  const name = "Felipe";
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent3, null)));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3() {
  const [phone, setPhone] = React.useState('77 11111-11111');
  setTimeout(function () {
    setPhone('77 22222-0222');
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    phone: phone
  }));
}

function MyComponent4(props) {
  const [idade, setIdade] = React.useState(25);
  setTimeout(function () {
    setIdade(26);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, " ", idade, " - ", props.phone));
}

function MyComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById("app"));
