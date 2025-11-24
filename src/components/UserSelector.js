import React from 'react';
import Button from './Button';

const UserSelector = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="p-3">
      <h5 className="text-center mb-3">Selecionar Usuário</h5>
      <div className="d-grid gap-2">
        <Button
          className={`btn ${currentUser === 'A' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setCurrentUser('A')}
        >
          Usuário A
        </Button>
        <Button
          className={`btn ${currentUser === 'B' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setCurrentUser('B')}
        >
          Usuário B
        </Button>
      </div>
      <div className="mt-4 p-3 bg-white rounded">
        <h6>Usuário Atual:</h6>
        <p className="fw-bold text-primary">
          {currentUser === 'A' ? 'Usuário A' : 'Usuário B'}
        </p>
      </div>
    </div>
  );
};

export default UserSelector;