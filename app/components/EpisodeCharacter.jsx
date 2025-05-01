import Link from "next/link"

async function getCharacters(id) {
  await new Promise(res => setTimeout(res, 3000));

  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const episode = await res.json();
  return episode.characters;
}

function getCharacter(path) {
  const id = path.replace("https://rickandmortyapi.com/api/character/", "");
  return id;
}

export default async function EpisodeCharacter({ id }) {
  const characters = await getCharacters(id);
  return (
    <>
      <h3>Episode Characters</h3>
      <ul>
        {characters.map(character => (
          <li key={character}>
            <Link href={'/characters/' + getCharacter(character)}>{character}</Link>
          </li>)
        )
        }
      </ul>
    </>
  )
}