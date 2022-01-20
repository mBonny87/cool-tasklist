import { taskStatus } from "../types/taskStatus";

const taskList = [
  {
    title: "Release",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: null,
    closed: null,
    status: taskStatus.toDo,
  },
  {
    title: "Test",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: "2022-02-02T00:00:00",
    closed: null,
    status: taskStatus.inProgress,
  },
  {
    title: "Build",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: "2022-02-01T00:00:00",
    closed: null,
    status: taskStatus.inProgress,
  },
  {
    title: "Build",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: "2022-02-01T00:00:00",
    closed: null,
    status: taskStatus.inProgress,
  },
  {
    title: "Code",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: "2021-19-11T00:00:00",
    closed: "2022-02-01T00:00:00",
    status: taskStatus.completed,
  },
  {
    title: "Plan",
    description:
      "The Plan stage covers everything that happens before the developers start writing code, and it’s where a Product Manager or Project Manager earns their keep. Requirements and feedback are gathered from stakeholders and customers and used to build a product roadmap to guide future development.",
    started: "2021-19-10T00:00:00",
    closed: "2021-19-11T00:00:00",
    status: taskStatus.completed,
  },
];

export { taskList };
