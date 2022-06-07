import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectControls } from "../controls/controls-slice";
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countries-slice";


export const useCountries = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {search, region} = useSelector(selectControls);
    const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
    const {status, error, qty} = useSelector(selectCountriesInfo);
  
    useEffect(() => {
      if (!qty) {
        dispatch(loadCountries());
      }
    }, [qty, dispatch]);

    return [countries, {status, error, qty}];
}