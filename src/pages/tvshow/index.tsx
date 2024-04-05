import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import {
  Grid,
  Header,
  Loader,
  Segment,
  Image,
  List,
  Label,
  Accordion,
  Card,
} from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid TV Show ID!</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  const seasonsPanels = data.seasons.map((season: any) => ({
    key: season.id,
    title: `Season ${season.season_number}`,
    content: {
      content: (
        <Card
          style={{ height: "70px" }}
          meta={season.air_date}
          description={`${season.episode_count} episodes`}
        />
      ),
    },
  }));

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header size='huge'> {data.name} </Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  size="medium"
                  centered
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Created by:</List.Header>
                  <List.Description>
                    {data.created_by
                      .map((creator: any) => creator.name)
                      .join(", ")}
                  </List.Description>
                </List.Item>
                <List.Item>
                  <List.Header>Episodes runtime:</List.Header>
                  {data.episode_run_time.join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Genres:</List.Header>
                  {data.genres.map((genre: any) => (
                    <Label key={genre.id}> {genre.name} </Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>First air date:</List.Header>
                  {data.first_air_date}
                </List.Item>
                <List.Item>
                  <List.Header>Networks:</List.Header>
                  {data.networks.map((network: any) => (
                    <Image
                      key={network.id}
                      src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                      size="mini"
                      style={{ marginRight: 10 }}
                    />
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Production companies:</List.Header>
                  {data.production_companies
                    .map((company: any) => company.name)
                    .join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Number of episodes:</List.Header>
                  {data.number_of_episodes}
                </List.Item>
                <List.Item>
                  <List.Header>Number of seasons:</List.Header>
                  {data.number_of_seasons}
                </List.Item>
                <List.Item>
                  <List.Header>Seasons:</List.Header>
                  <List.Description style={{height: "200px", overflowY: "scroll"}}> 
                    <Accordion
                      defaultActiveIndex={0}
                      panels={seasonsPanels}
                      styled
                    />
                  </List.Description>
                </List.Item>
                <List.Item>
                  <List.Header>Vote average:</List.Header>
                  {data.vote_average}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
