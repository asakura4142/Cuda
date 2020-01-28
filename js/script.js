var setupOption = {
    template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
    anchorSetup: [
        {
            backgroundColor: "#dc767d",
            label: "Section 1"
            },
        {
            backgroundColor: "#36d278",
            label: "Section 2"
            },
        {
            backgroundColor: "#22cfc6",
            label: "Section 3"
            },
        {
            backgroundColor: "#8794a1",
            label: "Section 4"
            },
        {
            backgroundColor: "#1ccdaa",
            label: "Section 5"
        }]
};
var scrollMenu = ScrollMenu(setupOption);