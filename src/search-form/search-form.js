import React from "react";
import axios from 'axios';
import { useState  } from 'react';
import { Input, Label, Button } from "@fluentui/react-components";
import { GlobeSearch24Regular } from '@fluentui/react-icons';
import { MovieList } from "../movie-grid/movie-list";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export const SearchForm = () => {

    const getYears = () => {
        axios
            .get(`https://localhost:44301/api/Movie/years`)
            .then((response) => {
                setYearsList(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

        return [];
    }

    const [yearsList, setYearsList] = useState(getYears());
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (event) => {
        getMovies()
        event.preventDefault();
    }

    const getMovies = () =>{
        axios
            .post(`https://localhost:44301/api/Movie/`, { title: title, year: year })
            .then((response) => {
                if (response.data) {
                    setMovies(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const checkYear = (event) => {
        setYear(event.value);
    }

    return (
        <div className="card p-3 py-4">
            <h5>Movie Information</h5>
            <div className="row g-3 mt-2">
                <div className="col-md-6">
                    <Label size="large">What are you looking for ?</Label>
                    <Input appearance="underline" style={{"width" : "100%"}} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <Label size="large">Select Year</Label>
                    <Dropdown options={yearsList} onChange={checkYear} placeholder="Select an year" />
                </div>
                <div className="col-md-2 text-center">
                    <Button 
                        size="large"
                        shape="circular"
                        appearance="transparent"
                        icon={<GlobeSearch24Regular />}
                        style={{marginTop:"10%"}}
                        onClick={handleSubmit}>
                            Search
                    </Button>
                </div>
            </div>
            <div>
                <MovieList movies={movies}></MovieList>
            </div>
        </div>
    )
}