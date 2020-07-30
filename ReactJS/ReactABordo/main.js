const ContextName = React.createContext("name");

function MyComponent1() {
    const name = "Felipe";

    return (

            <div className="component-1">
                <MyComponent2>
                    <MyComponent4 name={name} />
                </MyComponent2>
            </div>

    )
}

function MyComponent2(props) {
    
    return (
        <div className="component-2">
            <div>
                <header>{props.children}</header>
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

function MyComponent4(props) {
    const [ idade, setIdade ] = React.useState(25);
    const [ phone, setPhone ] = React.useState('77 11111-11111');

    setTimeout(function() {
        setIdade(26);
        setPhone('77 22222-0222');
    }, 1000);

    return (

        <div className="component-4">
            <p>{props.name} - {idade} - {phone}</p>
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