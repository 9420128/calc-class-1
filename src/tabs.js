export function tabs() {
    const tabs = document.getElementsByTagName('li')
    const sections = document.getElementsByTagName('section')

    ;[...tabs].forEach((tab) => tab.addEventListener('click', tabClick))

    function tabClick(event) {
        const tabId = event.target.dataset.id

        ;[...tabs].forEach((tab, i) => {
            tab.classList.remove('active')
            sections[i].classList.remove('active')
        })

        tabs[tabId - 1].classList.add('active')
        sections[tabId - 1].classList.add('active')
    }
}
