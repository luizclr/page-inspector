import { Background } from "~/components/loading/loading.styles";
import { useInspection } from "~/providers/inspection/inspection";

export const Loading: React.FC = () => {
  const { isLoading } = useInspection();

  return (
    <Background show={isLoading}>
      <p>loading...</p>
    </Background>
  );
};
