import React from 'react';
import {
  Card,
  CardText,
  CardSubtitle,
  CardBody,
  CardImg,
  CardTitle,
  Col,
} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component {
  render() {
    return (
      <Col sm="4">
        <Card className="Card" body outline color="primary">
          <CardBody>
            <CardImg src={this.props.imagen}></CardImg>
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>
              <b>Valor: </b>
              {this.props.precio}
            </CardSubtitle>
            <CardText>{this.props.descripcion}</CardText>
            <FichaProducto props={this.props} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Producto;
