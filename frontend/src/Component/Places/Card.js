import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './Card.css';
import jerusalemImage from './ddd.jpg';


const MainPage = () => {
  return (
    <>  
      <Container>
        <Row xs={1} md={3} lg={4} className="g-4 justify-content-center">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div className="card_places" id="card__all_places">

                <img className="card__background_places" src={jerusalemImage} alt="Jerusalem" />

                  <div className="card__content_places">

                    <div className="card__content--container_places">

                      <h2 className="card__title_places">JLM</h2>

                      <p className="mb-2 text-muted_places" id="p_card">Jerusalem</p>
                      <p id="p_card_places">The city of Jerusalem, one of the oldest and most important cities in history,
                        is located in the Middle East,
                        and is a major center for the three Abrahamic religions:Christianity, 
                        and Islam.
                      </p>
                      <button className="card__button_places">Book Tour</button>
                    </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;