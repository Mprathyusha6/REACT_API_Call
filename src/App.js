import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            employee: [],
            employee1: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    employee: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    handleLoadMore = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    employee: json,
                    isLoaded: true,
                })

                //    return employee = employee.concat(employee);
            }).catch((err) => {
                console.log(err);
            });


    }

    // func = () => {
    //     alert("hello")
    // }

    loadEvents = () => {

    }

    render() {

        const { isLoaded, employee } = this.state;

        if (!isLoaded)
            return <p>wait a min.....</p>;

        return (
            <div className="App">
                <div className="headerOrFooter sticky">
                    <h1>Profiles </h1>
                </div>
                <div className="content">

                    <input type="text" placeholder="search" className="search" />
                    {/* <input type="button" value="Click" className="search" onClick={this.func} /> */}
                    <input type="button" value="Load" className="search" onClick={this.handleLoadMore} />

                    {employee.data.map(item => (
                        <div key={item.id} className="flexelements ">
                            <div>
                                <img src={item.avatar} alt={item.first_name} />
                            </div>
                            <div>
                                <h1>{item.first_name} </h1>


                                <p>Email: {item.email}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="headerOrFooter">
                    <p>footer content</p>

                </div>
            </div>
        );

    }

}

export default App;