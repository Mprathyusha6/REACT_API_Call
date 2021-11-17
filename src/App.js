import React from 'react';

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            employee: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('https://reqres.in/api/users?page=2')
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

    render() {

        const { isLoaded, employee } = this.state;

        if (!isLoaded)
            return <p>wait a min.....</p>;

        return (
            <div className="App">
                <div class="headerOrFooter sticky">
                <h1>Profiles </h1>
                </div>
              <div class="content">
                 <input type="text" placeholder="search" class="search"/>
                 <input type="button" value="Load" class="search"/>
              {employee.data.map(item => (
                        <div key={item.id}  class="flexelements ">
                        <div>
                        <img src={item.avatar} alt={item.first_name}/>
                        </div>
                        <div>
                        <h1>{item.first_name} </h1>
                        
                        
                             <p>Email: {item.email}</p>
                        </div>
                        
                        </div>
                    ))}
              </div>
                    
                 <div class="headerOrFooter">
                 <p>footer content</p>

                 </div>
            </div>
        );

    }

}

export default App;