const mobScrTables = document.querySelectorAll('.mobScrTable');

mobScrTables.forEach(table => {
    table.onscroll = function(e) {
        if (window.innerWidth <= table.scrollWidth) {
            const tableTrs = table.querySelectorAll('tbody tr');
            const tds = table.querySelectorAll('tbody td:first-child');
            const width = tds[1].getBoundingClientRect().width + 'px'
            tableTrs.forEach(tr => {
                const trHeight = tr.querySelector("td").getBoundingClientRect().height;
                tr.style.height = trHeight + 'px';
            })
            tds.forEach(td => {
                if (table.scrollLeft > 0) {
                    td.style.transition = 'all 1s ease-out'
                    td.style.position = 'absolute'
                    td.style.zIndex = '2'
                    td.style.fontSize = '14px'
                    td.style.left = '0'
                    td.style.height = td.getBoundingClientRect().height + 'px'
                    td.style.boxShadow = '2px 0 2px 5px #d4c5e0'
                    td.style.borderRadius = '0 .5rem .5rem 0'
                } else {
                    td.style.fontSize = 'initial'
                    td.style.position = ''
                    td.style.borderRadius = 'initial'
                    td.style.boxShadow = 'initial'
                    td.style.scale = 'initial'
                }
            })
        }
    }
})