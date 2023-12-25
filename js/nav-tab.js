let tabs_wrapper = document.getElementsByClassName("tabs-wrapper")
            let change_event = new Event('change')

            for (tabs of tabs_wrapper) {
                let tab_list = tabs.getElementsByClassName("tab")
                let active_tab = tab_list[0]
                for (tab of tab_list) {
                    tab.setAttribute("tabindex", 0)

                    const change_selected = (e) => {
                        e.target.parentElement.style.setProperty("--bar-width", e.target.offsetWidth + "px")
                        e.target.parentElement.style.setProperty("--bar-offset", e.target.offsetLeft + "px")
                        e.target.parentElement.value = e.target.textContent
                        e.target.parentElement.dispatchEvent(change_event)
                    }
                    tab.addEventListener("focus", (e) => { change_selected(e) })
                }

                tabs.style.setProperty("--bar-width", active_tab.offsetWidth + "px")
                tabs.style.setProperty("--bar-offset", active_tab.offsetLeft + "px")
                tabs.value = active_tab.textContent
            }

            console.log(tabs_wrapper[0].value)

            tabs_wrapper[0].addEventListener('change', (e) => {
                console.log(e.target.value)
            })

            function mostrarAba(numeroAba) {
                // Esconde todas as abas
                document.getElementById('aba-1').style.display = 'none';
                document.getElementById('aba-2').style.display = 'none';
                document.getElementById('aba-3').style.display = 'none';

                // Mostra a aba selecionada
                document.getElementById('aba-' + numeroAba).style.display = 'block';
            }