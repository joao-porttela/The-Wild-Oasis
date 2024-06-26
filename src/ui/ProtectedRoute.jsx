import styled from "styled-components";
import {useUser} from "../features/authentication/hooks/useUser";
import Spinner from "./Spinner";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({children}) {
  const navigate = useNavigate();

  // 1. Load authenticated user
  const {user, isLoading, isAuthenticated} = useUser();

  // 2. If there is NO authenticated user, redirect to the login page
  useEffect(() => {
    if (!user && !isAuthenticated && !isLoading) navigate("/login");
  }, [user, isAuthenticated, isLoading, navigate]);

  // 3. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there is authenticated user, render the app
  if (isAuthenticated) return <div>{children}</div>;
}

export default ProtectedRoute;
