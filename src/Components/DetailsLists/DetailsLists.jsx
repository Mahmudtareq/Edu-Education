import { List, Paper, ThemeIcon, Title } from "@mantine/core";
import { TiTick } from "react-icons/ti";

const DetailsLists = () => {
  return (
    <>
      <Paper className="bg-slate-300/20 p-5 my-10">
        <Title order={4} className="text-start my-4">
          What you will learn
        </Title>
        <List
          spacing="xs"
          size="sm"
          start
          className="text-stone-600 text-base font-serif"
          icon={
            <ThemeIcon color="gray" size={20} radius="xl">
              <TiTick size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Handle advanced techniques like Dimensionality Reduction
          </List.Item>
          <List.Item>
            Handle specific topics like Reinforcement Learning best
          </List.Item>
          <List.Item>
            Know which Machine Learning model to choose for each type of problem
          </List.Item>
          <List.Item>
            Reinforcement learning upper confidence bound Thompson sampling
          </List.Item>
          <List.Item>
            Model Selection and Boosting fold cross validation parameter
          </List.Item>
          <List.Item>
            Use Machine Learning for personal purpose of machine
          </List.Item>
        </List>
      </Paper>
      <Paper className="p-5 my-8">
        <Title order={4} className="text-start my-4">
          Requirements
        </Title>
        <List className="text-stone-600 text-base font-serif">
          <List.Item> High School Mathematics Level</List.Item>
          <List.Item>Basic Python Knowledge Required</List.Item>
          <List.Item>
            To start development server run npm start command
          </List.Item>
          <List.Item>Broadband Internet</List.Item>
        </List>
      </Paper>
    </>
  );
};

export default DetailsLists;
