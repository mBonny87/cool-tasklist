import { taskStatus } from "../types/taskStatus";

const taskList = [
  {
    title: "Release",
    description:
      "The Release phase is a milestone in a DevOps pipeline — it’s the point at which we say a build is ready for deployment into the production environment. By this stage, each code change has passed a series of manual and automated tests, and the operations team can be confident that breaking issues and regressions are unlikely.",
    started: null,
    closed: null,
    status: taskStatus.toDo,
  },
  {
    title: "Test",
    description:
      "Once a build succeeds, it is automatically deployed to a staging environment for deeper, out-of-band testing. The staging environment may be an existing hosting service, or it could be a new environment provisioned as part of the deployment process. This practice of automatically provisioning a new environment at the time of deployment is referred to as Infrastructure-as-Code (IaC) and is a core part of many DevOps pipelines. More on that in a later article.",
    started: "2022-02-02T00:00:00",
    closed: null,
    status: taskStatus.inProgress,
  },
  {
    title: "Build",
    description:
      "The Build phase is where DevOps really kicks in. Once a developer has finished a task, they commit their code to a shared code repository. There are many ways this can be done, but typically the developer submits a pull request — a request to merge their new code with the shared codebase. Another developer then reviews the changes they’ve made, and once they’re happy there are no issues, they approve the pull-request. This manual review is supposed to be quick and lightweight, but it’s effective at identifying issues early.",
    started: "2022-02-01T00:00:00",
    closed: null,
    status: taskStatus.inProgress,
  },
  {
    title: "Code",
    description:
      "Once the team had grabbed their coffees and had the morning stand-up, the developments can get to work. In addition to the standard toolkit of a software developer, the team has a standard set of plugins installed in their development environments to aid the development process, help enforce consistent code-styling and avoid common security flaws and code anti-patterns.",
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
