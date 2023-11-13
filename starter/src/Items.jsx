import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import { useFetchTasks } from "../useReactQueryCustomHook";

const Items = () => {
  const { isLoading, data, error, isError } = useFetchTasks();
  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
