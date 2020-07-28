const ContextName = React.createContext("name");

function MyComponent1() {
    const name = "Felipe";

    return (
        <ContextName.Provider value={name}>
            <div className="component-1">
                <MyComponent2 />
            </div>
        </ContextName.Provider>
    )
}

function MyComponent2() {

    return (
        <div className="component-2">
            <MyComponent3 />
        </div>
    )
}

function MyComponent3() {

    return (
        <div className="component-3">
            <MyComponent4 />
        </div>
    )
}

function MyComponent4() {

    return (
        <ContextName.Consumer>
            {
                (ContextName) => {
                    <div className="component-4">
                        <p>{ContextName}</p>
                    </div>
                }
            }
        </ContextName.Consumer>
    )
}

function MyComponent() {

    return (
        <div id="components">
            <MyComponent1 />
        </div>
    )
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById("app")
)