import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        setData(res.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    };

    const listUsers = data.map(user => (
        <div className="d-flex mb-3" key={user.id}>
            <a href={user.html_url}>
                <img
                    width={64}
                    height={64}
                    className="me-3"
                    src={user.avatar_url}
                    alt="Avatar"
                />
            </a>
            <div>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </div>
        </div>
    ));

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <h3>GitHub Users Results</h3>
            {isLoading && <Spinner animation="border" />}
            {listUsers}
        </div>
    );
}

export default GitHub;