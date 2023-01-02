import { Text, Label } from "@fluentui/react-components";

export function MovieList({movies}) {
    if (movies) {
        return (
            <div>
                {movies.map(movie => {
                    return(
                        <div style={{marginTop:"5%"}}>
                            <div>
                                Title: <Label size="large"> {movie.title}</Label>
                            </div>
                            <div>
                                Year: <Label size="large">{movie.releaseYear}</Label>
                            </div>
                            <div>
                                Rating: <Label size="large">{movie.rating}%</Label>
                            </div>
                            <div>Synopsis:</div>
                            <Text size={400}>
                                {movie.synopsis}
                            </Text>
                        </div>
                        );
                })}
            </div>
        );
    }
}