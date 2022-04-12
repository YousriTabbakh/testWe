import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Card, ListGroup } from 'react-bootstrap';

export default function Perso() {

  let location = useLocation();
  const persoiD = location.state;
  const [perso, setPerso] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchPerso = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`https://anapioficeandfire.com/api/characters/${persoiD}`);
      const data = await response.json();
      setPerso(data);
      setLoading(false);
  }, [persoiD]);

  useEffect(() => {
    fetchPerso().catch(console.error);
  }, [fetchPerso]);

  return (
    <div className="perso-pages container">
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : perso ? (
        <Card>
          <Card.Body>
            <Card.Title>{perso.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Gender : {perso.gender ? perso.gender : '#'}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Born : {perso.born ? perso.born : '#' }</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Died : {perso.died ? perso.died : '#' }</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Culture : {perso.culture ? perso.culture : '#'}</Card.Subtitle>
          </Card.Body>
          <Card.Header>Titles :</Card.Header>
          <Card.Body>
            {perso.titles && perso.titles.map((title, i) => (
              <ListGroup variant="flush" key={i}>
                <ListGroup.Item>{title}</ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
          <Card.Header>TV Series :</Card.Header>
          <Card.Body>
            {perso.tvSeries && perso.tvSeries.map((serie, i) => (
              <ListGroup variant="flush" key={i}>
                <ListGroup.Item>{serie}</ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
        </Card>
      ) : (
        <p>No result</p>
      )}
    </div>
  );
}