import { Container } from "./styles";


export function Lists() {
    return (
        <Container
        width={300}
        height={Infinity}
        minConstraints={[240, Infinity]}
        maxConstraints={[300, Infinity]}
        className="app-sidebar"
      >
            <div>Lists</div>
        </Container>
    )
}