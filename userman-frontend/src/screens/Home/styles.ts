import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 55vw;
  height: 100vh;

  & {
    @media(max-width: 720px) {
      width: 90vw;
    }
  }

  .header-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    button {
      width: 100%;
      padding: 0.5rem;
      margin: 1rem 0;
      gap: 1rem;
      border-radius: 8px;
      background-color: var(--green-600);
      color: var(--gray-200);
      font-weight: bold;
    }
  }

  .modal-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`