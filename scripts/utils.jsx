export const create_inner_tabmenu_container: Function = (className, imgSrc, heading, info) => {

    const main_container = (_className) => $(`<div class=${_className}></div>`)
    const img_container = (_imgSrc) => $(`<div class="inner-tabmenu-img-container"><img src=${_imgSrc}></div>`)
    const content_container = () => $('<div class="inner-tabmenu-text-container data-aos="zoom-in"></div>')
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

export const team_card: Function = (img, name, position, info) => {
    const card_container = () => $('<div class="item"></div>')
    const team_card_content = () => $(`<div class="item-content"></div>`)
    const person_avatar = (_img) => $(`<p class="avatar"><img src=${_img}></p>`)
    const person_name = (_name) => $(`<h3 class="name">${_name}</h3>`)
    const person_job_position = (_position) => $(`<h6 class="job-position">${_position}</h6>`)
    const person_info = (_info) => $(`<p class="card-info">${_info}</p>`)

    team_card_content().css({ 'opacity': '0' })
    let inner_content = team_card_content()
        .append(person_avatar(img))
        .append(person_name(name))
        .append(person_job_position(position))
        .append(person_info(info))

    let container = card_container().append(inner_content)

    return container;
}
