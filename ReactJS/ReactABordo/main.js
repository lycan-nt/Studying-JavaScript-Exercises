const contextName = React.createContext("name");

function myComponent1() {
    const name = "Felipe";

    return (
        <contextName.Provider value={name}>
            <div className="component-1">
                <myComponent2 />
            </div>
        </contextName.Provider>
    )
}

function myComponent2() {

    return (
        <div className="component-2">
            <myComponent3 />
        </div>
    )
}

function myComponent3() {

    return (
        <div className="component-3">
            <myComponent4 />
        </div>
    )
}

function myComponent4() {

    return (
        <contextName.Consumer>
            {
                (contextName) => {
                    <div className="component-4">
                        <p>{contextName}</p>
                    </div>
                }
            }
        </contextName.Consumer>
    )
}

function myComponent() {

    return (
        <div id="components">
            <myComponent1 />
        </div>
    )
}

ReactDOM.render(
    <myComponent />,
    document.getElementById("app")
)