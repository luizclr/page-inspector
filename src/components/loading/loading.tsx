import progressBar from "~/assets/img/progress-bar.gif";
import { Background, Text } from "~/components/loading/loading.styles";
import { useInspection } from "~/providers/inspection/inspection";

export const Loading: React.FC = () => {
  const { isLoading } = useInspection();

  return (
    <Background show={isLoading}>
      <Text>Loading...</Text>
      <img src={progressBar} />
    </Background>
  );
};
