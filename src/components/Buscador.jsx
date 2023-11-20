import React, { useState, useEffect } from "react";
import { Card, Container, FormControl, InputGroup, Row } from "react-bootstrap";

function Buscador({ accessToken, onTokenChange }) {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        
        search();
    }, [searchInput]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
    };

    async function search() {
        console.log("Búsqueda para: " + searchInput);

        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        const albumResults = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
            .then(response => response.json())
            .then(data => data.albums.items);

        setAlbums(albumResults);
    }

    return (
        <div >
            <Container className="p-5 w-100">
                <InputGroup  size="s">
                    <FormControl 
                        placeholder="Busca por álbum o nombre del artista"
                        type="input"
                        onChange={handleInputChange}
                    />
                </InputGroup>
            </Container>
            <div className="main" >
            <Container className="text-center">
                <Row className="mx-2 row row-cols-4" >
                    {albums.map((album, i) => (
                        <Card key={i} className="mb-3 mx-2" style={{ width: '15rem' }}>
                            <Card.Img className="p-3" src={album.images[0]?.url} alt={`Album ${i}`} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>{album.name}</Card.Title>
                                <Card.Text>Artista: {album.artists[0]?.name}</Card.Text>
                                <Card.Text>Fecha lanzamiento: <br/>{album.release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
            </div>
        </div>
    );
}

export default Buscador;
