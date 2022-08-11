import {Container, StyledButton} from "./styles";


const ActionContainer = ({todayAction, showDelete, deleteAction}) => {

    return(
        <Container>
            <StyledButton onClick={e => todayAction()}>
                Today
            </StyledButton>
            {showDelete ? <StyledButton onClick={e => deleteAction()} >
                Delete
            </StyledButton> : null}

        </Container>
    );
}

export {ActionContainer}
