var setupOption = {
    template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
    anchorSetup: [
        {
            backgroundColor: "#87509c",
            label: "About"
            },
        {
            backgroundColor:  "#17c2a4",
            label: "Services"
            },
        {
            backgroundColor: "#3c5499",
            label: "Contact"
            },
        {
            backgroundColor: "#344b8e",
            label: "Social icon"
            },
    ]
};
var scrollMenu = ScrollMenu(setupOption);