{
  const tasks = [];

  const toggleTaskDone = (index) => {
    tasks[index].done = !tasks[index].done;
    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li ${task.done ? 'style="text-decoration: line-through"' : ""}>
            ${task.content}
            <button class="done js-done">zrobione?</button>
            <button class="remove js-remove">usuń</button>
            </li>
            `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    const remoeveButtons = document.querySelectorAll(".js-remove");

    remoeveButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        tasks.splice(index, 1);
        render();
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
        render();
      });
    });
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-addTask").value.trim();
      console.log(newTaskContent);

      if (newTaskContent === "") {
        return;
      }

      tasks.push({
        content: newTaskContent,
      });
      render();
    });
  };

  init();
}
