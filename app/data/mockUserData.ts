import UserData from "~/data/UserData";

export default {
  id: 1,
  firstName: "User",
  lastName: "One",
  username: "firstUser11",
  email: "number1@usertable.com",
  choreResponses: [
    {
      id: "1",
      title: "Chore 1",
      description: "Do the dishes",
      recurrence: "Daily",
      category: "Cleaning",
      duration: "PT30M",
      difficulty: 1,
      userId: 1,
    },
    {
      id: "2",
      title: "Chore 2",
      description: "Fold laundry",
      recurrence: "Weekly",
      category: "Misc",
      duration: "PT45M",
      difficulty: 2,
      userId: 1,
    },
  ],
} as UserData;
