import { render } from '@testing-library/react';
import React from 'react';
import Movie from '../components/Movie';

class Detail extends React.Component{

    componentDidMount(){
        console.log(this.props);
        const { location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        const {location} = this.props;
        if(location.state){
            const {id, poster, title, year, genres, summary} = location.state;
            return (
                <Movie
                    key={id}
                    id={id}
                    year={year}
                    title={title}
                    summary={summary}
                    poster={poster}
                    genres={genres}
                />
            )
        } else{
            return null;
        }
    }
}

export default Detail;