const columnNames = ["משפחה", "חברים של משפחה", "חברים", "משפחה של חברים", "בית ספר", "חברים לעבודה", "אנשים מאיזור המגורים", "עובדים בחנויות", "חברים לספורט", "מעגלים חברתיים", "נוסעים בתחברה ציבורית", "סטודנטים", "מרצים", "בעלי מקצוע", "צבא"]

export function getGrid() {
    let grid = []
    let h = []

    columnNames.forEach(name => {
        h.push({ value: name, dateOfChange: null, className: "cell-header", readOnly: true })
    })

    grid.push(h)

    for (let i = 0; i  < 200; i++) {
        let line = []
        
        columnNames.forEach(name => {
            line.push({ value: "", dateOfChange: null})
        })
        
        grid.push(line)
    }

    return grid
}