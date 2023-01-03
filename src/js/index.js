$(()=> {
    formula.autoassign();
    formula.init();
    // SELECT and UNSELECT ALL
    formula.registerButtonAction("sel", (self) => {
        formula.select($(".f-option.f-style-multi"))
    })
    formula.registerButtonAction("des", (self) => {
        formula.unselect($(".f-option.f-style-multi"))
    })
    // switch ENABLED / DISSABLED
    formula.registerButtonAction("dis", (self) => {
        formula.enable($("[name='ena']"));
        formula.disable(self);
        formula.disable($(".f-option"));
    })
    formula.registerButtonAction("ena", (self) => {
        formula.enable($("[name='dis']"));
        formula.disable(self);
        formula.enable($(".f-option"));
    })
});