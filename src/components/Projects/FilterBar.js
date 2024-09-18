import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './FilterBar.css'; // Import the custom CSS

function FilterBar({ genres, subtropes, selectedGenre, selectedSubtrope, onGenreChange, onSubtropeChange }) {
  return (
    <div className="container">
      <Form>
        <Row className="row_test">
          <Col md={6}>
            <Form.Group controlId="genreSelect" className="filter-bar-group">
              <Form.Label>Genre</Form.Label>
              <div className="filter-select-wrapper">
                <Form.Control as="select" value={selectedGenre} onChange={e => onGenreChange(e.target.value)}>
                  <option value="">All Genres</option>
                  {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                  ))}
                </Form.Control>
                <span className="custom-dropdown-arrow"></span>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="subtropeSelect" className="filter-bar-group">
              <Form.Label>Subtrope</Form.Label>
              <div className="filter-select-wrapper">
                <Form.Control as="select" value={selectedSubtrope} onChange={e => onSubtropeChange(e.target.value)}>
                  <option value="">All Subtropes</option>
                  {subtropes.map((subtrope, index) => (
                    <option key={index} value={subtrope}>{subtrope}</option>
                  ))}
                </Form.Control>
                <span className="custom-dropdown-arrow"></span>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>

  );
}

export default FilterBar;