import React from 'react';

class StarwarsRandCharacter extends React.Component {


    constructor() {
        super();

        this.state = {
            name: '',
            height: '',
            mass: '',
            hair_color: '',
            skin_color: '',
            eye_color: ''
        }

        this.getCharacter = this.getCharacter.bind(this);
    }

    getCharacter() {
        const peopleURL = 'https://swapi.dev/api/people/';
        const sw_people_max = 83;
        const random_sw_char_num = (Math.floor(Math.random() * sw_people_max)) + 1

        const getURL = peopleURL + random_sw_char_num;

        fetch(getURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                });
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.name !== '' && 
                        <div>
                        <h1>Name: {this.state.name}</h1>
                        <h2>Height: {this.state.height}</h2>
                        <h2>Mass: {this.state.mass}</h2>
                        <h2>Hair Color: {this.state.hair_color}</h2>
                        <h2>Skin Color: {this.state.skin_color}</h2>
                        <h2>Eyes Color {this.state.eye_color}</h2>
                        </div>
                }
                <button onClick={this.getCharacter}>Show a Random SW Character</button>
            </div>
        );
    }
}

export default StarwarsRandCharacter;