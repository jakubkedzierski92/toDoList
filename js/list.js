{
    const tasks = [
        {
            content: "udalo sie dodac",
            done: false,
        },
        {
            content: "to sie udalo dodac",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for(const task of tasks){
            htmlString += `
            <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

  const init = () => {
    render();

    const form = document.querySelector(".js-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-addTask").value.trim();
        console.log(newTaskContent)

        if(newTaskContent === ""){
        return;
        }

        tasks.push({
            content: newTaskContent
        })
        render()
    });
  };

  init();
}
