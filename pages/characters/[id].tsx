import Container from '@material-ui/core/Container';
import { Character, useCharacterQuery } from 'lib/graphql/character.graphql';
import CharacterCard from 'components/shared/Character';
import Hero from 'components/shared/Hero';

export default function CharacterPage({ id }) {
  const { data, loading } = useCharacterQuery({
    variables: { id: id },
  });

  if (!loading && data && data.character) {
    console.log(data.character);
    return (
      <Container maxWidth="lg">
        <Hero data={data.character as Character} />
        <CharacterCard data={data.character as Character} />
      </Container>
    );
  }

  return null;
}

CharacterPage.getInitialProps = ({ query: { id } }) => {
  return { id };
};
