import { people, Person } from "@/app/data/data";
import { getImageUrl } from "@/app/data/utils";

function ListItem({ title, p }: { title: string; p: Person[] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {p.map((person) => {
          return (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function List() {
  const chemistPerson = people.filter((person: Person) => {
    return person.profession === "chemist";
  });
  const otherPerson = people.filter((person: Person) => {
    return person.profession !== "other";
  });
  return (
    <article>
      <ListItem title={"Chemist"} p={chemistPerson} />
      <ListItem title={"other"} p={otherPerson} />
    </article>
  );
}
