import { useNavigate, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';

import { selectDetails } from '../store/details/details-selector';
import { clearDetails, loadCountryByName } from '../store/details/details-actions';
import { Info } from '../features/details/Info';
import { CountryDetails } from '../features/details/CountryDetails';


export const Details = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate}/>
    </div>
  );
};
