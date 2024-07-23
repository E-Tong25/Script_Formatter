function onOpen(){
  DocumentApp.getUi().createMenu('Script Formatter') //Creates an addon Menu
  .addItem('Show Sidebar','showSideBar') //Adds Show Sidebar to menu
  .addToUi();
}

function onInstall(e){
  onOpen(e);
}

function showSideBar(){
 var ui = HtmlService.createHtmlOutputFromFile('sidebar') //creates HTML
 .setTitle('Script Formatter')
 .setWidth(350); //Sets the Sidebar Title
 DocumentApp.getUi().showSidebar(ui); // Updates the UI to show the sidebar
}
