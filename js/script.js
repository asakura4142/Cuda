var setupOption = {
    template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
    anchorSetup: [
        {
            backgroundColor: "#dc767d",
            label: "About"
            },
        {
            backgroundColor: "#36d278",
            label: "Services"
            },
        {
            backgroundColor: "#22cfc6",
            label: "Contact"
            },
        {
            backgroundColor: "red",
            label: "Social icon"
            },
    ]
};
var scrollMenu = ScrollMenu(setupOption);