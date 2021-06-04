import { Container, Content, Button } from './styles';

export default function Pages() {
  return (
    <Container>
      <Content>
        <h1>
          Welcome to <span>Congress Finder</span>
        </h1>
        <h2>
          This project will show you a list of members of a particular chamber
          in a particular Congress. The results include all members who have
          served in that congress and chamber, including members who are no
          longer in office. You can find additional info{' '}
          <a
            href="https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </h2>
        <Button to="/congressman">Find your congressman</Button>
      </Content>
    </Container>
  );
}
