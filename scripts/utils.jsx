export const create_inner_tabmenu_container: Function = (className, imgSrc, heading, info) => {

    const main_container = (_className) => $(`<div class=${_className}></div>`)
    const img_container = (_imgSrc) => $(`<div class="inner-tabmenu-img-container"><img src=${_imgSrc}></div>`)
    const content_container = () => $('<div class="inner-tabmenu-text-container"></div>')
    const heading_content = (_heading) => $(`<h3 class="inner-tabmenu-heading">${_heading}</h3>`)
    const text_info_content = (_info) => $(`<p class="inner-tabmenu-info">${_info}</p>`)

    const container = main_container(className)
    const img = img_container(imgSrc)
    const text_content_container = content_container()
    const header = heading_content(heading)
    const paragraph_info = text_info_content(info)

    text_content_container
        .append(header)
        .append(paragraph_info)

    container
        .append(img)
        .append(text_content_container)

    return container;
}