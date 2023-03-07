import React from 'react';

class StarwarsRandCharacter extends React.Component {

    IMG_404 = "/dead-end.gif";

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
                // Add image if its Url is valid, a dead-end gif if not
                this.imageUrlExists(data.image)
                .then((imgExists) => {
                    if(imgExists)
                    {
                        this.setState({image: data.image})
                    }
                    else {
                        this.setState({image: this.IMG_404})
                    }
                });

                this.setState({
                    name: data.name,
                    height: data.height,
                    mass: data.mass
                });
            });
    }

    imageUrlExists(url) {
        return new Promise((res, rej) => {
            fetch(url)
                .then((img) => {
                    res(img.ok);
                })
        });
    }

    render() {
        return (
            <div style={{color: "#ccf"}}>
            {   this.state.name &&
                <div>
                { this.state.name && <h1>{this.state.name}</h1> }
                    <img height="500vh" alt="" src={this.state.image}/>
                    { <h2>Height: {this.state.height || "Unknown"}</h2> }
                    <h2>Mass: {this.state.mass || "Unknown"}</h2>
                </div>
            }
            <button style={{backgroundColor: '#444', color: "#ccf", fontSize: "4vh"}} onClick={this.getCharacter}>Show a Random Starwars Character</button>
            </div>
        );
    }
}

export default StarwarsRandCharacter;