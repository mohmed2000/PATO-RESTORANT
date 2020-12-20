import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";

export default function MainMenu() {
  return (
    <div className="MainMenu">
      <Container fluid="lg">
        <Row>
          <Col>
            <div className="menuLeft">
              <div className="starter">
                <h3 className="menuH3">STARTERS</h3>
                <Item
                  itemp="PINE NUT SBRISALONA ................................ $29.79"
                  itemSpan="Feugiat pharetra"
                />
                <Item
                  itemp="VIVAMUS PRETIUM ................................ $24.29"
                  itemSpan="Sed fermentum eros vitae eros"
                />
                <Item
                  itemp="Feugiat pharetra ................................ $42.15"
                  itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
                />
                <Item
                  itemp="Proin lacinia ................................ $18.79"
                  itemSpan="Sed fermentum eros vitae eros"
                />
              </div>
            </div>
            <div className="drinks">
              <h3 className="menuH3">DRINKS</h3>
              <Item
                itemp="PINE NUT SBRISALONA ................................ $29.79"
                itemSpan="Feugiat pharetra"
              />
              <Item
                itemp="VIVAMUS PRETIUM ................................ $24.29"
                itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
              />
              <Item
                itemp="Feugiat pharetra ................................ $42.15"
                itemSpan="Sed fermentum eros vitae eros"
              />
              <Item
                itemp=" Proin lacinia mix ................................ $18.79"
                itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
              />
            </div>
          </Col>
          <Col>
            <div className="menuRight">
              <div className="drinks">
                <h3 className="menuH3">MAIN</h3>
                <Item
                  itemp="PINE NUT SBRISALONA ................................ $29.79"
                  itemSpan="Feugiat pharetra"
                />
                <Item
                  itemp="VIVAMUS PRETIUM ................................ $24.29"
                  itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
                />
                <Item
                  itemp="Feugiat pharetra ................................ $42.15"
                  itemSpan="Sed fermentum eros vitae eros"
                />
                <Item
                  itemp="Proin nulla ................................ $18.79"
                  itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
                />
                <Item
                  itemp="WINE NUT DORFB ................................ $29.79"
                  itemSpan="Feugiat pharetra"
                />
                <Item
                  itemp="MOLA PERGONI ................................ $24.29"
                  itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
                />
                <Item
                  itemp="FORGOT pharetra ................................ $42.15"
                  itemSpan="Sed fermentum eros vitae eros"
                />
              </div>
              <div className="starter">
                <h3 className="menuH3">DESSERT</h3>
                <Item
                  itemp="PINE SBRISALONA ................................ $9.79"
                  itemSpan="Feugiat pharetra"
                />
                <Item
                  itemp="VIVAMUS PRETIUM ................................ $4.29"
                  itemSpan="Sed fermentum eros vitae eros"
                />
                <Item
                  itemp="Feugiat maximus ................................ $12.15"
                  itemSpan="Proin lacinia nisl ut ultricies posuere nulla"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
