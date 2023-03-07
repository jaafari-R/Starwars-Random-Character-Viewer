import React from 'react';

class StarwarsRandCharacter extends React.Component {


    constructor() {
        super();

        this.state = {
            image: '',
            name: '',
            height: '',
            mass: ''
        }

        this.getCharacter = this.getCharacter.bind(this);
    }

    getCharacter() {
        const peopleURL = 'https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/';
        const sw_people_max = 88;
        const random_sw_char_num = (Math.floor(Math.random() * sw_people_max)) + 1

        const getURL = peopleURL + random_sw_char_num + '.json';

        fetch(getURL)
            .then(response => response.json())
            .then(data => {
                console.log(data.id);
                this.setState({
                    image: data.image,
                    name: data.name,
                    height: data.height,
                    mass: data.mass
                });
            });
    }

    render() {
        return (
            <div>
            {   this.state.name &&
                <div>
                { this.state.name && <h1>Name: {this.state.name}</h1> }
                    <img height="500vh" src={this.state.image} alt="" />
                    { <h2>Height: {this.state.height || "Unknown"}</h2> }
                    <h2>Mass: {this.state.mass || "Unknown"}</h2>
                </div>
            }
            <button onClick={this.getCharacter}>Show a Random Starwars Character</button>
            </div>
        );
    }
}

export default StarwarsRandCharacter;