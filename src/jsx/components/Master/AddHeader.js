import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddHeader({ btnName, addHandler }) {
  return (
    <div className='form-head d-flex mb-3 mb-lg-5 align-items-start'>
      <button onClick={addHandler} className='btn btn-danger'>
        + {btnName}
      </button>
      <div className='input-group search-area ml-auto d-inline-flex'>
        <input type='text' className='form-control' placeholder='Search here' />
        <div className='input-group-append'>
          <span className='input-group-text c-pointer'>
            <i className='flaticon-381-search-2'></i>
          </span>
        </div>
      </div>
      <Dropdown className='ml-3'>
        <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
          <i className='flaticon-381-controls-3 '></i> Filter
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown-menu-right'>
          <Dropdown.Item href='#'>A To Z List</Dropdown.Item>
          <Dropdown.Item href='#'>Z To A List</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='ml-3'>
        <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
          Newest
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown-menu-right'>
          <Dropdown.Item href='#'>Newest</Dropdown.Item>
          <Dropdown.Item href='#'>Old</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button
        onClick={() => {
          alert('Alert');
        }}
        className='btn btn-outline-primary ml-3'
      >
        <i className='flaticon-381-menu-1 mr-0'></i>
      </button>
      <button
        onClick={() => {
          alert('Alert');
        }}
        className='btn btn-light ml-3'
      >
        <i className='flaticon-381-pad mr-0'></i>
      </button>
    </div>
  );
}

export default AddHeader;
