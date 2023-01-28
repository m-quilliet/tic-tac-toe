import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function Board() {
    return (
        <Container className='container'>
            <Row className='box'>
                <Col className="vLine1">1</Col>
                <Col className="vLine2">2</Col>
                <Col className="hLine1">3</Col>
                <Col className="hLine2">3</Col>
            </Row>
        </Container>
    )
}

export default Board