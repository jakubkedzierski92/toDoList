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
            <li>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

  const init = () => {
    render();
  };

  init();
}
