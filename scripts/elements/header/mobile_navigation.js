import Button from '../button/index.jsx'

function _init_mobile_navigation() {
    
    create_mobile_container()
}
const elements = {
    modal_window: '<div id="modal-window"></div>',
    mobile_nav_container: '<div id="mobile-menu"></div>',
    close_button_container: '<p id="close-icon-container"><i class="fas fa-times"></i></p>',
    mobile_list: '<ul id="mobile-items"></ul>',
    mobile_item: (name) => `<li><a class="test">${name}</a></li>`,
    root: () => $('#root')
}
function create_mobile_container() {
    // First append the modal window to the #root.
    var btn_one = new Button()
    elements.root().append(elements.modal_window)
    
    let mobile_container = $(elements.mobile_nav_container);
    let close_btn = $(elements.close_button_container);
    let mobile_list = $(elements.mobile_list);
    
    btn_one.create('HAHA', mobile_list)
    // Appending the list items to the unordered-list.
    mobile_list
    .append(elements.mobile_item('FAQ'))
    .append(elements.mobile_item('Contacts'))
    .append(elements.mobile_item('About'))
    .append(elements.mobile_item('Home'))

    // Appending the close button and the list to the mobile container
    mobile_container
    .append(close_btn)
    .append(mobile_list)

    // Append the filled mobile container to the #root

    mobile_container
    .appendTo(elements.root())
}
export {
    _init_mobile_navigation
}
