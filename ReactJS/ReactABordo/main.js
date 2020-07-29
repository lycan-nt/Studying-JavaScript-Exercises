const ContextName = React.createContext("name");

function MyComponent1() {
    const name = "Felipe";

    return (

            <div className="component-1">
                <MyComponent2>
                    <p>Hello World!</p>
                </MyComponent2>
            </div>

    )
}

function MyComponent2(porps) {

    return (
        <div className="component-2">
            <div>
                <header>{porps.children}</header>
                <footer></footer>
            </div>
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


                    <div className="component-4">
                        <p>Component 4</p>
                    </div>


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