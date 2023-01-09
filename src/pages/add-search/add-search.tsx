import { Button, Input, Title, Wrapper } from "~/pages/add-search/add-search.styles";

export const AddSearch: React.FC = () => {
  return (
    <div>
      <Title>Add Search</Title>
      <Wrapper>
        <Input type="text" placeholder="e.g: security" />
        <Button type="submit">ADD</Button>
      </Wrapper>
    </div>
  );
};
