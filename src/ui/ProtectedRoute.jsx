import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import styled from "styled-components"
import Spinner from "./Spinner"

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`

function ProtectedRoute({children}) {
  const navigate = useNavigate()

  // Load the auth user
  const { isLoading, isAuthenticated} = useUser()

  // if no auth user redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // while loading show spinner
  if (isLoading) return (
    <FullPage>
      <Spinner />
    </FullPage>
  );
  // render app
  if (isAuthenticated) return children
}

export default ProtectedRoute
